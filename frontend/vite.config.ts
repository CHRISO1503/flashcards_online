import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api": "https://flashcards-online-backend.onrender.com",
            "https://flashcards-online-frontend.onrender.com":
                "https://flashcards-online-backend.onrender.com",
        },
    },
});
