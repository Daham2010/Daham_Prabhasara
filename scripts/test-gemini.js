import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from 'fs';
import path from 'path';

// Read .env file manually
const envPath = path.resolve(process.cwd(), '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const match = envContent.match(/VITE_GEMINI_API_KEY=(.+)/);
const apiKey = match ? match[1].trim() : null;

if (!apiKey) {
    console.error("Could not find VITE_GEMINI_API_KEY in .env");
    process.exit(1);
}

console.log("Testing Gemini API with key:", apiKey.substring(0, 5) + "..." + apiKey.substring(apiKey.length - 4));

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

async function test() {
    try {
        const result = await model.generateContent("Say hello!");
        const response = await result.response;
        console.log("Success! Response:", response.text());
    } catch (error) {
        console.error("Error:", error.message);
    }
}

test();
