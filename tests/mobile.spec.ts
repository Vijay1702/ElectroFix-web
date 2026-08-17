import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['Pixel 5'],
});

test.describe('Mobile Viewport Tests', () => {
  test('hamburger menu opens and navigates', async ({ page }) => {
    await page.goto('/');
    
    // Check if the hamburger menu is visible
    const menuButton = page.locator('button[aria-label="Toggle Menu"]').or(page.locator('button svg').locator('..')); // Adjust selector if needed, relying on aria-label is best, fallback to svg parent
    
    // In our Navbar it's just a button with a menu icon. Let's find it.
    // It's the only button in the md:hidden block that controls state
    const openMenuBtn = page.getByRole('button').filter({ has: page.locator('svg') }).last();
    
    await openMenuBtn.click();
    
    // The mobile menu should now be visible
    const mobileAboutLink = page.getByRole('link', { name: 'About Us' }).last();
    await expect(mobileAboutLink).toBeVisible();
    
    // Navigate using mobile menu
    await mobileAboutLink.click();
    await expect(page).toHaveURL(/.*\/about/);
  });

  test('sticky mobile contact bar renders and has correct links', async ({ page }) => {
    await page.goto('/');
    
    // On mobile, the desktop floating icons should be hidden, but bottom bar is visible
    const callButton = page.getByRole('link', { name: 'Call', exact: true });
    await expect(callButton).toBeVisible();
    await expect(callButton).toHaveAttribute('href', 'tel:+919443631389');

    const whatsappButton = page.getByRole('link', { name: 'WhatsApp', exact: true });
    await expect(whatsappButton).toBeVisible();
    await expect(whatsappButton).toHaveAttribute('href', 'https://wa.me/918667264983');
  });
});
