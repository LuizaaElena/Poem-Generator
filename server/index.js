import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

if (!process.env.GEMINI_API_KEY) {
  console.error("GEMINI_API_KEY is missing in .env");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// endpoint test
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/poem", async (req, res) => {
  try {
    const { topic, style, language } = req.body || {};

    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const prompt = `
You are a creative poetry generator.

Write a poem in ${language || "English"}.
Style: ${style || "free verse"}.
Topic or theme: ${topic || "anything you want"}.

The poem should:
- have between 8 and 20 lines
- be coherent and emotionally engaging
- not include explanations, only the poem text
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ poem: text });
  } catch (error) {
    console.error("Error generating poem:");
    console.error(error);

    const message =
      error?.message ||
      error?.response?.data?.error?.message ||
      "Unknown error from Gemini API";

    res.status(500).json({ error: message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
