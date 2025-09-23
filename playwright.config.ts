// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  // ✅ Where Playwright should look for test files
  testDir: './testcases',

  // ✅ Global test timeout (per test)
  timeout: 30 * 1000, // 30 seconds

  // ✅ Run tests in files in parallel (default: true)
  fullyParallel: false,

  // ✅ Retry failed tests
  retries: 0,

  // ✅ Number of parallel workers (use CPU cores by default)
  workers: undefined, // or set manually, e.g. 4

  // ✅ Configure reporters (console + HTML + JSON)
  reporter: [
    ['line'], 
    ['html', { open: 'never' }], 
    ['json', { outputFile: 'results.json' }],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],

  // ✅ Shared settings for all tests
  use: {
    baseURL: 'https://www.ebay.com/',
    headless: true,
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'on-first-retry', // record trace on retry for debugging
    // launchOptions: {
    //   args: ['--start-maximized'],
    // },
    // viewport: null,
  },

  // ✅ Define multiple projects (cross-browser)
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    {
      name: 'Google Chrome',
      use: {
        channel: 'chrome', // runs actual Chrome
        ...devices['Desktop Chrome'],
      },
    },

    // ✅ Microsoft Edge
    {
      name: 'Microsoft Edge',
      use: {
        channel: 'msedge', // runs actual Edge
        ...devices['Desktop Edge'],
      },
    },
  ],

  // ✅ Folder for test artifacts (screenshots, traces, videos)
  outputDir: 'test-results/',
});

console.log("✅ Playwright config loaded!");
