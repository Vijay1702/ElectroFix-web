import { test, expect } from '@playwright/test';

test.describe('Navigation and Routing', () => {
  test('should navigate to homepage and check title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Sri Senthil Spares & Services/);
  });

  test('navbar links should navigate to correct pages', async ({ page }) => {
    await page.goto('/');

    // Test About Us
    const aboutLink = page.getByRole('link', { name: 'About Us' }).first();
    await aboutLink.click();
    await expect(page).toHaveURL(/.*\/about/, { timeout: 10000 });
    await expect(page.locator('h3').filter({ hasText: 'Electrical Repair Services in Pattukkottai' })).toBeVisible();

    // Test Services
    await page.goto('/');
    await page.click('nav >> text="Services"');
    await expect(page).toHaveURL(/.*\/services/);
    await expect(page.locator('h3').filter({ hasText: 'Our Products & Services' })).toBeVisible();

    // Test Contact Us
    await page.goto('/');
    await page.click('nav >> text=Contact Us');
    await expect(page).toHaveURL(/.*\/contact/);
    await expect(page.locator('h2').filter({ hasText: 'Get in Touch' })).toBeVisible();
  });

  test('footer links should navigate correctly', async ({ page }) => {
    await page.goto('/');
    
    // Quick Links in footer
    const footerAbout = page.locator('footer').getByRole('link', { name: 'About Us' });
    await footerAbout.click();
    await expect(page).toHaveURL(/.*\/about/, { timeout: 10000 });
    
    const footerHome = page.locator('footer').getByRole('link', { name: 'Home' });
    await footerHome.click();
    await expect(page).toHaveURL(/\/$/, { timeout: 10000 });
  });

  test('mobile menu should open and navigate', async ({ page, isMobile }) => {
    if (!isMobile) test.skip(); // Only run if configured as mobile viewport

    await page.goto('/');
    
    // Open mobile menu (assuming hamburger button doesn't have exact text, using button locator)
    await page.locator('nav button').click();
    
    // Click on mobile Services link
    await page.locator('.md\\:hidden >> text=Services').click();
    
    await expect(page).toHaveURL(/.*\/services/);
  });
});
