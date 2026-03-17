import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  const usePreactCompat =
    process.env.UDS_USE_PREACT_COMPAT === "1" ||
    process.env.UDS_USE_PREACT_COMPAT === "true";

  return {
    plugins: [react()],
    resolve: {
      alias: usePreactCompat
        ? {
            react: "preact/compat",
            "react-dom": "preact/compat",
            "react-dom/test-utils": "preact/test-utils",
            "react/jsx-runtime": "preact/jsx-runtime",
          }
        : {},
    },
    server: {
      port: 5173,
      sourcemapIgnoreList: () => true,
    },
    css: {
      devSourcemap: false,
    },
    build: {
      sourcemap: false,
    },
  };
});
