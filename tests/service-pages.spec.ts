import { test, expect } from '@playwright/test';

const SERVICE_PAGES = [
  { path: '/motor-repair-pattukkottai', title: 'Motor Repair in Pattukkottai' },
  { path: '/fan-repair-pattukkottai', title: 'Fan Repair in Pattukkottai' },
  { path: '/mixer-grinder-service-pattukkottai', title: 'Mixer Grinder Service in Pattukkottai' },
  { path: '/submersible-pump-repair-pattukkottai', title: 'Submersible Pump Repair in Pattukkottai' },
  { path: '/water-motor-repair-pattukkottai', title: 'Water Motor Repair in Pattukkottai' },
  { path: '/electrical-spare-parts-pattukkottai', title: 'Electrical Spare Parts in Pattukkottai' },
  { path: '/mixie-spares-pattukkottai', title: 'Mixie Spares in Pattukkottai' },
  { path: '/fan-spares-pattukkottai', title: 'Fan Spares in Pattukkottai' },
];

test.describe('Service SEO Pages Tests', () => {
  for (const service of SERVICE_PAGES) {
    test(`verifies ${service.path} SEO structure and CTAs`, async ({ page }) => {
      await page.goto(service.path);
      
      // Check Title
      await expect(page).toHaveTitle(`${service.title} | Sri Senthil`);
      
      // Check H1
      const h1 = page.locator('h1');
      await expect(h1).toHaveText(service.title);
      
      // Check Service JSON-LD exists
      const scriptTag = page.locator('script[type="application/ld+json"]').last();
      const jsonContent = await scriptTag.textContent();
      expect(jsonContent).toBeTruthy();
      if (jsonContent) {
        const data = JSON.parse(jsonContent);
        // The last script should be our Service schema, but we also have LocalBusiness.
        // Let's just check if ANY script tag has Service schema
        const scriptTags = await page.locator('script[type="application/ld+json"]').all();
        let foundServiceSchema = false;
        for (const tag of scriptTags) {
            const content = await tag.textContent();
            if (content && content.includes('"@type":"Service"')) {
                foundServiceSchema = true;
                break;
            }
        }
        expect(foundServiceSchema).toBeTruthy();
      }

      // Check CTAs
      const callBtn = page.getByRole('link', { name: /Call/i }).first();
      const waBtn = page.getByRole('link', { name: /WhatsApp/i }).first();
      
      await expect(callBtn).toBeVisible();
      await expect(callBtn).toHaveAttribute('href', 'tel:+919443631389');
      
      await expect(waBtn).toBeVisible();
      await expect(waBtn).toHaveAttribute('href', 'https://wa.me/918667264983');
    });
  }
});
