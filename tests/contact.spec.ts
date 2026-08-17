import { test, expect } from '@playwright/test';

test.describe('Contact and Interaction Tests', () => {
  test('contact page renders form and details', async ({ page }) => {
    await page.goto('/contact');
    
    // Check main headings
    await expect(page.locator('h2').filter({ hasText: 'Get In Touch' })).toBeVisible();
    
    // Check form fields
    await expect(page.locator('input[placeholder="John Doe"]')).toBeVisible();
    await expect(page.locator('input[placeholder="+91 00000 00000"]')).toBeVisible();
    await expect(page.locator('textarea[placeholder="Describe the issue with your appliance..."]')).toBeVisible();
    await expect(page.locator('button', { hasText: 'Send Message' })).toBeVisible();
  });

  test('contact form validation works', async ({ page }) => {
    await page.goto('/contact');
    
    // Submit empty form
    await page.locator('button', { hasText: 'Send Message' }).click();
    
    // Should show validation errors
    await expect(page.locator('text=Name must be at least 2 characters')).toBeVisible();
    await expect(page.locator('text=Please enter a valid phone number')).toBeVisible();
    await expect(page.locator('text=Message must be at least 10 characters')).toBeVisible();
  });

  test('CTA buttons have correct hrefs on SEO pages', async ({ page }) => {
    await page.goto('/motor-repair-pattukkottai');
    
    // Check call button
    const callBtn = page.locator('a:has-text("Call Now")').first();
    await expect(callBtn).toHaveAttribute('href', 'tel:+919443631389');
    
    // Check WhatsApp button
    const waBtn = page.locator('a:has-text("WhatsApp Us")').first();
    await expect(waBtn).toHaveAttribute('href', 'https://wa.me/919443631389');
    
    // Check View Location button
    const locBtn = page.locator('a:has-text("View Location")').first();
    await expect(locBtn).toHaveAttribute('href', '/contact');
  });
});
