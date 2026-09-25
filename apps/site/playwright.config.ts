import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  reporter: process.env.CI ? "github" : "list",
  use: { baseURL: "http://localhost:4322", locale: "pt-BR" },
  webServer: {
    command: "pnpm exec astro preview --port 4322 --ignore-lock",
    url: "http://localhost:4322",
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    { name: "celular", use: { ...devices["Pixel 7"] } },
    {
      name: "desktop",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } },
    },
  ],
});
