import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "PLACEHOLDER_KEY");

export async function getAIResponse(prompt: string): Promise<string> {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
        const result = await model.generateContent(`${prompt}\n\nProvide the answer as a single word.`);
        const response = await result.response;
        const text = response.text().trim().replace(/[^\w\s]/gi, ''); // Basic sanitization
        return text.split(/\s+/)[0] || "Unknown"; // Return first word
    } catch (error) {
        console.error("AI Integration Error:", error);
        return "Error";
    }
}
