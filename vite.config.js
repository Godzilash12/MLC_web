import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
var __dirname = path.dirname(fileURLToPath(import.meta.url));
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        cssCodeSplit: true,
        modulePreload: {
            polyfill: false,
        },
        rollupOptions: {
            output: {
                manualChunks: function (id) {
                    if (id.includes("node_modules")) {
                        if (id.includes("react-router-dom"))
                            return "router";
                        if (id.includes("react-dom") || id.includes("\\react\\") || id.includes("/react/"))
                            return "react-vendor";
                        if (id.includes("lucide-react"))
                            return "icons";
                        if (id.includes("@supabase"))
                            return "supabase";
                        if (id.includes("i18next") || id.includes("react-i18next"))
                            return "i18n";
                    }
                    return undefined;
                }
            }
        }
    }
});
