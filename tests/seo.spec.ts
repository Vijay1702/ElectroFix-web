import { test, expect } from '@playwright/test';

test.describe('SEO and Metadata Tests', () => {
  test('sitemap.xml is accessible and contains valid XML', async ({ request }) => {
    const response = await request.get('/sitemap.xml');
    expect(response.status()).toBe(200);
    const content = await response.text();
    expect(content).toContain('<?xml');
    expect(content).toContain('<urlset');
    expect(content).toContain('https://srisenthilspares.in');
  });

  test('robots.txt is accessible and valid', async ({ request }) => {
    const response = await request.get('/robots.txt');
    expect(response.status()).toBe(200);
    const content = await response.text();
    expect(content).toContain('User-Agent: *');
    expect(content).toContain('Allow: /');
    expect(content).toContain('Sitemap: https://srisenthilspares.in/sitemap.xml');
  });

  test('homepage has correct title, description, and canonical URL', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('Sri Senthil Spares & Services | Motor & Appliance Repair in Pattukkottai');
    
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', 'Motor, fan, mixer grinder and submersible repair in Pattukkottai. Genuine electrical spare parts available at Sri Senthil Spares & Services. Call or WhatsApp today.');
    
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', 'https://srisenthilspares.in');
  });

  test('homepage contains LocalBusiness JSON-LD schema', async ({ page }) => {
    await page.goto('/');
    const scriptTag = page.locator('script[type="application/ld+json"]').first();
    const jsonContent = await scriptTag.textContent();
    expect(jsonContent).toBeTruthy();
    if (jsonContent) {
      const data = JSON.parse(jsonContent);
      expect(data['@type']).toBe('LocalBusiness');
      expect(data.name).toBe('Sri Senthil Spares and Service');
      expect(data.telephone).toBe('+919443631389');
      expect(data.address.addressLocality).toBe('Pattukkottai');
    }
  });
});
