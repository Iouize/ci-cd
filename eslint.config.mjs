import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js"],
    ignores: ["**/*.test.js"], // ignore les fichiers de tests
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        process: "readonly",  // process autorisé
        console: "readonly"   // console autorisé
      },
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-console": "warn"   // avertit pour console.log
    }
  }
]);
