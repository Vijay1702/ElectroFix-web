import { test, expect } from '@playwright/test';

test.describe('Services Hub and SEO Pages', () => {
  test('services page renders categories', async ({ page }) => {
    await page.goto('/services');
    
    await expect(page.locator('text=Repair Services')).toBeVisible();
    await expect(page.locator('text=Products & Spares')).toBeVisible();
    
    // Check for some service cards
    await expect(page.locator('h3', { hasText: 'Motor Repair' }).first()).toBeVisible();
    await expect(page.locator('h3', { hasText: 'Fan Repair' }).first()).toBeVisible();
  });

  test('clicking motor repair card navigates to dedicated SEO page', async ({ page }) => {
    await page.goto('/services');
    
    // Click on Motor Repair card
    await page.click('text=Complete servicing and rewinding of water motors');
    
    await expect(page).toHaveURL(/.*\/motor-repair-pattukkottai/);
    await expect(page.locator('h1')).toHaveText('Motor Repair in Pattukkottai');
    await expect(page).toHaveTitle(/Motor Repair in Pattukkottai/);
    
    // Check that specific features are present
    await expect(page.locator('text=Expert motor rewinding')).toBeVisible();
  });

  test('clicking fan repair card navigates to dedicated SEO page', async ({ page }) => {
    await page.goto('/services');
    
    // Click on Fan Repair card
    await page.click('text=Ceiling fans, table fans, and exhaust fans service');
    
    await expect(page).toHaveURL(/.*\/fan-repair-pattukkottai/);
    await expect(page.locator('h1')).toHaveText('Fan Repair in Pattukkottai');
  });
  
  test('clicking mixer grinder card navigates to dedicated SEO page', async ({ page }) => {
    await page.goto('/services');
    
    // Click on Mixer Grinder Service card
    await page.click('text=Blade replacement, motor repair, and general servicing');
    
    await expect(page).toHaveURL(/.*\/mixer-grinder-service-pattukkottai/);
    await expect(page.locator('h1')).toHaveText('Mixer Grinder Service in Pattukkottai');
  });
});
