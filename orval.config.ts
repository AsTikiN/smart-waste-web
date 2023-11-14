import { defineConfig } from "orval";

const apiURL = "http://localhost:9000";

export default defineConfig({
  booklab: {
    output: {
      mode: "tags-split",
      target: "src/api/endpoints/index.ts",
      schemas: "src/api/types",
      prettier: true,
    },
    input: {
      target: `${apiURL}/api-docs-config`,
    },
  },
});
