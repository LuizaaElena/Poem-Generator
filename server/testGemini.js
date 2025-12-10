import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

async function main() {
  try {
    const result = await model.generateContent(
      "Write a short 6-line poem about a cat learning to code in JavaScript."
    );
    const response = await result.response;
    console.log("\n=== POEM ===\n");
    console.log(response.text());
  } catch (err) {
    console.error("❌ Test error:", err);
  }
}

main();
