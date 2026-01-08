import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js"],
    ignores: ["**/*.test.js"], // ignore les fichiers de tests
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        process: "readonly" // permet d'utiliser process
      },
    },
    rules: {
      "no-unused-vars": "error",   // interdit les variables inutilisées
      "no-undef": "error",         // interdit les variables non définies
      "no-console": "warn"         // avertit pour console.log
    }
  }
]);
