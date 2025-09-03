// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import { GoogleGenAI } from "@google/genai";
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
console.log(GEMINI_API_KEY);

async function main(prompt: string) {
  const ai = new GoogleGenAI({
    apiKey: GEMINI_API_KEY,
  });
  const config = {
    responseModalities: ["TEXT"],
  };
  const model = "gemini-1.5-flash";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  let fileIndex = 0;
  let fullResponse = "";
  for await (const chunk of response) {
    if (
      !chunk.candidates ||
      !chunk.candidates[0].content ||
      !chunk.candidates[0].content.parts
    ) {
      continue;
    }
    if (chunk.candidates?.[0]?.content?.parts?.[0]?.inlineData) {
    } else {
      console.log(chunk.text);
      fullResponse += chunk.text;
    }
  }
  return fullResponse;
}

export default main;
