Gemini Clone

I built a frontend-only clone of Google Gemini using React. This project demonstrates a working AI search interface using the Gemini API, with state management handled via the Context API and dynamic rendering of streamed responses.

Features

Search Box: Users can type prompts and get real-time AI responses from the Gemini API.

Sidebar: Stores recent prompts for quick access and allows starting a new chat.

New Chat Functionality: Clears the current conversation for a fresh start.

Context API: Centralized state management for prompts and results.

Dynamic Streaming: Responses are streamed from the API and displayed as they arrive.

Technologies Used

React (Functional components, Context API)

JavaScript / TypeScript / HTML / CSS

Google Gemini API via @google/genai

Environment Variables to safely store the API key (VITE_GEMINI_API_KEY)
