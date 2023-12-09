const { test, expect } = require('@playwright/test');

const backendUrl = 'http://localhost:8000';
const frontendUrl = 'http://localhost:5173';

test('create idea through frontend', async ({ page }) => {
  // Navigate to the frontend page
  await page.goto(frontendUrl);

  // Interact with the Vue.js application to create an idea
  await page.fill('#title', 'Test Idea');
  await page.fill('#description', 'This is a test idea.');
  await page.fill('#fun_factor', '5');
  await page.fill('#complexity_factor', '3');
  await page.click('#submit');

  // Wait for the idea creation to complete (you may need to adjust the selector based on your actual implementation)
  await page.waitForSelector('#success-message');

  // Validate that the idea was created successfully by checking for a success message
  const successMessage = await page.textContent('#success-message');
  expect(successMessage).toContain('Idea created successfully');

  // TODO return json for /ideas
  /* // Optionally, you can also check the backend to ensure the idea is saved
  const response = await page.evaluate(async (backendUrl) => {
    const response = await fetch(`${backendUrl}/ideas/`);
    return response.json();
  }, backendUrl);

  // Validate that the response from the backend contains the newly created idea
  expect(response).toContainEqual({
    title: 'Test Idea',
    description: 'This is a test idea.',
    fun_factor: 5,
    complexity_factor: 3,
  }); */
});
