import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';

// Read .env file manually since we don't have dotenv installed
const envPath = path.resolve(process.cwd(), '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const match = envContent.match(/VITE_OPENAI_API_KEY=(.+)/);
const apiKey = match ? match[1].trim() : null;

if (!apiKey) {
    console.error("Could not find VITE_OPENAI_API_KEY in .env");
    process.exit(1);
}

console.log("Testing OpenAI API with key:", apiKey.substring(0, 5) + "..." + apiKey.substring(apiKey.length - 4));

const openai = new OpenAI({
    apiKey: apiKey
});

async function test() {
    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: "You are a helpful assistant." }, { role: "user", content: "Hello!" }],
            model: "gpt-3.5-turbo",
        });

        console.log("Success! Response:", completion.choices[0].message.content);
    } catch (error) {
        console.error("Error:", error.message);
        if (error.response) {
            console.error("Status:", error.response.status);
            console.error("Data:", error.response.data);
        }
    }
}

test();
