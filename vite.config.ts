import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

const __COMPONENT_NAME__ = "My Component";

export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
    cssInjectedByJsPlugin({
      preRenderCSSCode: (cssCode) =>
        cssCode.replace(
          /__COMPONENT_NAME__/g,
          __COMPONENT_NAME__.replace(/-/g, "_").replace(/\s/g, "_")
        ),
    }),
  ],

  resolve:
    mode === "development"
      ? {}
      : {
          alias: {
            react: "https://unpkg.com/react@18.2.0/umd/react.development.js",
            "react-dom":
              "https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js",
          },
        },
  build: {
    lib: {
      entry: "src/lib.tsx",
      name: "wmc",
      fileName: (format) => `cc.${format}.js`,
      formats: ["iife"],
    },
  },
  define: {
    __COMPONENT_NAME__: JSON.stringify(
      __COMPONENT_NAME__.replace(/-/g, "_").replace(/\s/g, "_")
    ),
    "process.env.NODE_ENV": '"production"',
  },
}));
