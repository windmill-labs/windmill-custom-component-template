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
  build: {
    lib: {
      entry: "src/component/Component.tsx",
      name: __COMPONENT_NAME__.replace(/-/g, "_").replace(/\s/g, "_"),
      formats: ["iife"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  define: {
    __COMPONENT_NAME__: JSON.stringify(__COMPONENT_NAME__),
    "process.env.NODE_ENV": JSON.stringify(mode),
  },
}));
