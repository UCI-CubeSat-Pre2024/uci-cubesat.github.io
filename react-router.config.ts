import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  buildDirectory: "dist",
  prerender: [
    "/",
    "/aboutus/what-we-do",
    "/aboutus/meet-the-team",
    "/contact",
  ],
} satisfies Config;
