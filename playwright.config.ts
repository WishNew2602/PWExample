// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  // ✅ Where Playwright should look for test files
  testDir: './testcases',

  // ✅ Global test timeout (per test)
  timeout: 30 * 1000, // 30 seconds

  // ✅ Run tests in files in parallel (default: true)
  fullyParallel: true,

  // ✅ Retry failed tests
  retries: 1,

  // ✅ Number of parallel workers (use CPU cores by default)
  workers: undefined, // or set manually, e.g. 4

  // ✅ Configure reporters (console + HTML + JSON)
  reporter: [
    ['line'], 
    ['html', { open: 'never' }], 
    ['json', { outputFile: 'results.json' }]
  ],

  // ✅ Shared settings for all tests
  use: {
    baseURL: 'https://playwright.dev',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry', // record trace on retry for debugging
  },

  // ✅ Define multiple projects (cross-browser)
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],

  // ✅ Folder for test artifacts (screenshots, traces, videos)
  outputDir: 'test-results/',
});

console.log("✅ Playwright config loaded!");
