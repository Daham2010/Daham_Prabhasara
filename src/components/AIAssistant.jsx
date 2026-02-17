import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenerativeAI } from "@google/generative-ai";
import '../styles/AIAssistant.css';

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there! I'm your AI assistant. How can I help you today?", sender: 'bot' }
    ]);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    // Initialize Gemini Client
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // System context for the AI
    const systemContext = `
        You are a helpful AI assistant for Daham Prabhasara's portfolio website.
        Here is some context about Daham and his portfolio:
        - Role: Web Developer (Frontend & Backend focus).
        - Tech Stack: JavaScript, React, Node.js, HTML/CSS, Tailwind CSS.
        - Experience: Building responsive websites, e-commerce platforms, and task management apps.
        - Contact: Can be reached via the contact form on the site or email at contact@daham.dev.
        - Personality: Professional, friendly, and enthusiastic about technology.
        
        Your goal is to answer visitor questions about Daham's skills, projects, and background.
        Keep answers concise and relevant to his professional profile.
    `;

    // Auto-scroll to bottom of chat
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(scrollToBottom, [messages]);

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        // Add user message
        const userMessage = {
            id: Date.now(),
            text: inputText,
            sender: 'user'
        };
        setMessages(prev => [...prev, userMessage]);
        setInputText("");
        setIsTyping(true);

        try {
            // Start a chat session with Gemini
            const chat = model.startChat({
                history: [
                    {
                        role: "user",
                        parts: [{ text: systemContext + "\n\nHello!" }],
                    },
                    {
                        role: "model",
                        parts: [{ text: "Understood. I am Daham's AI assistant. I will use the information provided to help visitors. How can I assist you today?" }],
                    },
                    ...messages.slice(1).map(m => ({
                        role: m.sender === 'bot' ? 'model' : 'user',
                        parts: [{ text: m.text }]
                    }))
                ],
            });

            const result = await chat.sendMessage(inputText);
            const botResponse = result.response.text();

            const botMessage = {
                id: Date.now() + 1,
                text: botResponse,
                sender: 'bot'
            };
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error("Error calling Gemini:", error);

            let errorText = "Sorry, I encountered an error. Please try again later.";

            // Basic error mapping for Gemini
            if (error.message?.includes("quota") || error.message?.includes("429")) {
                errorText = "I've run out of credits or hit a rate limit. Please try again later.";
            } else if (error.message?.includes("API key") || error.message?.includes("401")) {
                errorText = "Invalid API Key. Please check your configuration.";
            }

            const errorMessage = {
                id: Date.now() + 1,
                text: errorText,
                sender: 'bot'
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="ai-assistant-container">
            {/* Floating Toggle Button */}
            <motion.button
                className="ai-widget-button"
                onClick={toggleChat}
                aria-label="Open AI Assistant"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={!isOpen ? {
                    boxShadow: ["0 4px 15px rgba(118, 75, 162, 0.4)", "0 4px 25px rgba(118, 75, 162, 0.8)", "0 4px 15px rgba(118, 75, 162, 0.4)"]
                } : {}}
                transition={{
                    boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
            >
                <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                >
                    {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
                </motion.div>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="ai-chat-window"
                        initial={{ opacity: 0, scale: 0.8, y: 20, originX: 1, originY: 1 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        {/* Header */}
                        <div className="chat-header">
                            <div className="chat-title">
                                <div className="bot-avatar">
                                    <Bot size={18} color="white" />
                                </div>
                                <h3>AI Assistant</h3>
                            </div>
                            <button className="close-chat" onClick={toggleChat}>
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="chat-messages">
                            <AnimatePresence mode="popLayout">
                                {messages.map((msg, index) => (
                                    <motion.div
                                        key={msg.id}
                                        layout
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className={`message ${msg.sender}`}
                                    >
                                        {msg.text}
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="message bot typing-indicator"
                                >
                                    <span>...</span>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form className="chat-input-area" onSubmit={handleSendMessage}>
                            <input
                                type="text"
                                className="chat-input"
                                placeholder="Ask me anything..."
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                            />
                            <motion.button
                                type="submit"
                                className="send-button"
                                disabled={!inputText.trim() || isTyping}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Send size={18} />
                            </motion.button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AIAssistant;
