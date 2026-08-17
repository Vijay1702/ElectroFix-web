import { test, expect } from '@playwright/test';

test.describe('Home Page Sections Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('hero section contains proper SEO H1 and CTAs', async ({ page }) => {
    // Check H1
    const h1 = page.locator('h1');
    await expect(h1).toContainText('Electrical Appliance Repair & Spare Parts in');
    await expect(h1).toContainText('Pattukkottai');
    
    // Check CTAs
    const callBtn = page.getByRole('link', { name: '📞 Call Now' });
    const waBtn = page.getByRole('link', { name: '💬 WhatsApp Now' });
    const directionsBtn = page.getByRole('link', { name: '📍 Get Directions' });

    await expect(callBtn).toBeVisible();
    await expect(callBtn).toHaveAttribute('href', 'tel:+919443631389');
    
    await expect(waBtn).toBeVisible();
    await expect(waBtn).toHaveAttribute('href', 'https://wa.me/918667264983');
    
    await expect(directionsBtn).toBeVisible();
    await expect(directionsBtn).toHaveAttribute('href', /google\.com\/maps/);
  });

  test('about section renders properly', async ({ page }) => {
    const aboutHeading = page.locator('h3', { hasText: 'Your Local Repair Shop' });
    await expect(aboutHeading).toBeVisible();
    
    await expect(page.locator('text=Experienced Mechanics')).toBeVisible();
    await expect(page.locator('text=Original Spare Parts')).toBeVisible();
  });

  test('brands section renders properly', async ({ page }) => {
    await expect(page.locator('text=Brands We Service & Sell').first()).toBeVisible();
    await expect(page.locator('text=Crompton').first()).toBeVisible();
    await expect(page.locator('text=Havells').first()).toBeVisible();
  });

  test('why choose us section renders properly', async ({ page }) => {
    await expect(page.locator('h2').filter({ hasText: 'Why Choose Us' })).toBeVisible();
    await expect(page.locator('h3', { hasText: 'Good Quality Repairs You Can Trust' })).toBeVisible();
  });

  test('testimonials section renders properly', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'What Our Clients Say' })).toBeVisible();
    await expect(page.locator('text=Excellent').first()).toBeVisible();
  });

});
