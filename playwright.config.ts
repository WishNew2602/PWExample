import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './testcases',
  timeout: 500 * 1000,
  fullyParallel: false,
  retries: 0,
  workers: undefined, // or set manually, e.g. 4
  reporter: [
    ['line'], 
    ['html', { open: 'never' }], 
    ['json', { outputFile: 'results.json' }],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
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
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge', // runs actual Edge
    //     ...devices['Desktop Edge'],
    //   },
    // },
  ],
  outputDir: 'test-results/',
});

console.log("Playwright config loaded!");
