import express from "express";
// import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from 'cors'
dotenv.config();

const app = express();
app.use(cors({
  origin: ["https://your-frontend-domain.vercel.app", "http://localhost:5173"]
}));
app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
  res.json({ message: "Server chal raha hai 🚀" });
});

// Chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "invalid messages" });
    }

    const userLast = messages[messages.length - 1];
    if (!userLast || userLast.role !== "user") {
      return res.status(400).json({ error: "no user message" });
    }

    // ✅ Correct Gemini endpoint (v1beta, generateContent)
    const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const body = {
      contents: [
        {
          role: "user",
          parts: [{ text: userLast.content }],
        },
      ],
    };

    const apiResp = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!apiResp.ok) {
      const text = await apiResp.text();
      console.error("Gemini error:", text);
      return res.status(502).json({ error: "upstream error", details: text });
    }

    const apiJson = await apiResp.json();

    // ✅ Properly extract the assistant reply
    
    const reply =
  apiJson.candidates?.[0]?.content?.parts?.[0]?.text ??
  "No response from Gemini.";


    // ✅ Console me readable format
    console.log("Gemini response:", JSON.stringify(apiJson, null, 2));

    res.json({ reply });
  } catch (err) {
    console.error("Internal error:", err);
    res.status(500).json({ error: "internal server error" });
  }
});

if(process.env.NODE_ENV !== "production")
{
    const PORT = process.env.PORT || 5000;
    app.listen(PORT , ()=> console.log("Server is Running on PORT: ", PORT));
}

// export server for vercel
export default app;