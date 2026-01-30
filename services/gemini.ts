import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Initialize the API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateChatResponse = async (userMessage: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-latest', // Fast and efficient for chat
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "正在處理您的請求，但收到空白回應。請再試一次。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "目前無法連線 (API Key 問題或網路錯誤)。歡迎直接 Email 聯繫 Matthew！";
  }
};