import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

// Deliberately separate from vite.config.ts: that one pulls in
// @lovable.dev/vite-tanstack-config, which wires up TanStack Start's SSR
// server entry and Nitro build plugins -- neither of which unit tests need
// or can run under. This config only resolves the `@/` path alias.
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
