import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Calendar, ArrowRight } from 'lucide-react';
import '../styles/Blog.css';

const Blog = () => {
    // Simulated admin state - in a real app, this would come from auth context
    const [isAdmin, setIsAdmin] = useState(true);
    const [isAdding, setIsAdding] = useState(false);
    const [newPost, setNewPost] = useState({ title: '', excerpt: '', category: 'Tech' });

    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "Exploring the Future of Frontend Development",
            date: "Feb 15, 2026",
            excerpt: "How AI and low-code tools are reshaping the way we build user interfaces in 2026.",
            category: "Tech"
        },
        {
            id: 2,
            title: "Mastering React 19 Performance",
            date: "Feb 10, 2026",
            excerpt: "Practical tips and tricks for optimizing your React applications using the latest features.",
            category: "React"
        },
        {
            id: 3,
            title: "Why Minimalist Design is Still King",
            date: "Jan 28, 2026",
            excerpt: "Understanding the psychological impact of clean, focused web design on user retention.",
            category: "Design"
        }
    ]);

    const handleDelete = (id) => {
        const password = prompt("Please enter admin password to delete this post:");
        if (password === "D6431429") {
            setPosts(posts.filter(post => post.id !== id));
        } else if (password !== null) {
            alert("Incorrect password. Access denied.");
        }
    };

    const handleAddPost = (e) => {
        e.preventDefault();
        if (!newPost.title || !newPost.excerpt) return;

        const postToAdd = {
            id: Date.now(),
            ...newPost,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        };

        setPosts([postToAdd, ...posts]);
        setNewPost({ title: '', excerpt: '', category: 'Tech' });
        setIsAdding(false);
    };

    return (
        <section id="blog" className="section blog-section">
            <div className="container">
                <motion.h2
                    className="heading-md text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Latest <span className="accent-text">Insights</span>
                </motion.h2>

                <div className="blog-controls">
                    {/* Simulated Admin Toggle */}
                    <button onClick={() => setIsAdmin(!isAdmin)} className="btn-small">
                        {isAdmin ? "Exit Admin View" : "Enter Admin View"}
                    </button>

                    {/* Share Idea Button */}
                    <button
                        onClick={() => setIsAdding(!isAdding)}
                        className={`btn-primary share-btn ${isAdding ? 'active' : ''}`}
                    >
                        {isAdding ? "Cancel" : "Share Your Idea"}
                    </button>
                </div>

                <AnimatePresence>
                    {isAdding && (
                        <motion.div
                            className="add-post-form-container"
                            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginBottom: '3rem' }}
                            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <form className="add-post-form" onSubmit={handleAddPost}>
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            placeholder="What's your idea?"
                                            value={newPost.title}
                                            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Category</label>
                                        <select
                                            value={newPost.category}
                                            onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                                        >
                                            <option value="Tech">Tech</option>
                                            <option value="React">React</option>
                                            <option value="Design">Design</option>
                                            <option value="Ideas">Ideas</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Excerpt / Content</label>
                                    <textarea
                                        placeholder="Briefly share your thoughts..."
                                        rows="3"
                                        value={newPost.excerpt}
                                        onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary submit-post-btn">
                                    Post Idea <ArrowRight size={18} />
                                </button>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="blog-grid">
                    <AnimatePresence mode="popLayout">
                        {posts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                className="blog-card"
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                            >
                                <div className="blog-card-header">
                                    <span className="blog-category">{post.category}</span>
                                    {isAdmin && (
                                        <motion.button
                                            className="delete-btn"
                                            onClick={() => handleDelete(post.id)}
                                            whileHover={{ scale: 1.1, color: "#ff4d4d" }}
                                            whileTap={{ scale: 0.9 }}
                                            aria-label="Delete post"
                                        >
                                            <Trash2 size={18} />
                                        </motion.button>
                                    )}
                                </div>
                                <div className="blog-content">
                                    <div className="blog-date">
                                        <Calendar size={14} />
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 className="blog-title">{post.title}</h3>
                                    <p className="blog-excerpt">{post.excerpt}</p>
                                    <a href="#" className="read-more">
                                        Read More <ArrowRight size={16} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Blog;
