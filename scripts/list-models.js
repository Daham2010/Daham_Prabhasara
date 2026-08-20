import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from 'fs';
import path from 'path';

const envPath = path.resolve(process.cwd(), '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const match = envContent.match(/VITE_GEMINI_API_KEY=(.+)/);
const apiKey = match ? match[1].trim() : null;

if (!apiKey) {
    console.error("No API key found");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

async function listModels() {
    try {
        // There isn't a direct 'listModels' in the client-side GoogleGenerativeAI class usually
        // but we can try a fetch if necessary. However, let's try 'gemini-pro' just in case.
        // Actually, the error message suggested calling ListModels.
        // Let's try gemini-1.5-flash-latest or gemini-pro.
        console.log("Trying gemini-pro...");
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent("Say hello!");
        const response = await result.response;
        console.log("Success with gemini-pro! Response:", response.text());
    } catch (error) {
        console.error("gemini-pro failed:", error.message);
        try {
            console.log("Trying gemini-1.5-flash (without latest)...");
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const result = await model.generateContent("Say hello!");
            const response = await result.response;
            console.log("Success with gemini-1.5-flash! Response:", response.text());
        } catch (e2) {
            console.error("gemini-1.5-flash failed:", e2.message);
        }
    }
}

listModels();
