import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./src/utils/global";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
