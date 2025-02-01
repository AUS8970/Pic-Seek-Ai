require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { default: axios } = require("axios");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ 
  model: "gemini-1.5-flash",
  // systemInstruction: "You are a cat. Your name is Neko.",
});

app.get("/rumor-detector", async (req, res) => {
  const prompt = req.query?.prompt;
  if(!prompt){
    res.send({ message: "Please provide prompt in query."});
    return;
  };

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [
          {
            text: "When i give you any text. you have to tell me the rumor parcentage of the text",
          },
        ],
      },
      {
        role: "model",
        parts: [{ text: "Okay. Tell me" }],
      },
      {
        role: "user",
        parts: [
          {
            text: "Bangladesh is secretly building a floating city in the Bay of Bengal powered entirely by solar energy and AI-driven technology!",
          },
        ],
      },
      {
        role: "model",
        parts: [{ text: "Rumor parcentege 99%" }],
      },
      {
        role: "user",
        parts: [
          {
            text: "human can fly",
          },
        ],
      },
      {
        role: "model",
        parts: [{ text: "Rumor parcentege 100%" }],
      },
      {
        role: "user",
        parts: [
          {
            text: "human eat rock",
          },
        ],
      },
      {
        role: "model",
        parts: [{ text: "Rumor parcentege 100%" }],
      },
    ],
  });

  let result = await chat.sendMessage(prompt);

  const answer = result.response.text();
  res.send({ rumorstatus: answer})

});

app.get("/text-ai", async(req, res) => {
  const prompt = req.query?.prompt;
  if(!prompt){
    res.send({ message: "Please provide prompt in query."});
    return;
  };

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  res.send({ answer: result.response.text() })
});

app.get("/generate-json", async(req, res) => {
  const prompt = req.query?.prompt;
  if(!prompt){
    res.send({ message: "Please provide prompt in query."});
    return;
  };

  const FinalPrompt = `genarate some data from this prompt ${prompt} using this JSON schema:

  data = {'dataType': output}
  Return: Array<data>`;

  const result = await model.generateContent(FinalPrompt);
  const output = result.response.text().slice(7, -4);
  const jsonData = JSON.parse(output)
  res.send(jsonData);
});

app.get("/generate-detail", async(req, res) => {
  const prompt = req.query?.prompt;
  if (!prompt) {
    res.send({ message: "please provide a prompt in query" });
    return;
  }
  const response = await axios.get(prompt, { responseType: "arraybuffer" });
  const responseData = {
    inlineData: {
      data: Buffer.from(response.data).toString("base64"),
      mimeType: "image/png",
    },
  };

  const result = await model.generateContent([
    "tell the detail of the image",
    responseData,
  ]);
  console.log(result.response.text());

  res.send({ detail: result.response.text() });
});

app.get("/", (req, res) => {
  res.send("Hello!")
});

app.listen(port, () => {
  console.log(`Server running on port:`, port)
})