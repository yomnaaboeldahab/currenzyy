# Currenzy — Modern Currency Converter

A polished, responsive, multilingual currency converter built with plain HTML/CSS/JavaScript.

## Included
- Real currency conversion using Frankfurter API (no API key required)
- 200+ currency directory
- Search by currency code, currency name or country
- Country flags
- English / Arabic / French / Spanish
- Light / dark mode
- Responsive mobile layout
- Semantic HTML + meta tags + JSON-LD
- robots.txt + sitemap.xml starter
- AdSense-ready placeholder area
- No framework required

## Run
Open `index.html` in a browser, or serve the folder with any static host.

For production:
1. Replace `https://example.com/` with your real domain in `index.html`, `robots.txt`, and `sitemap.xml`.
2. Add your real Privacy Policy / Terms pages.
3. Replace the ad placeholder with your approved ad code after your site is eligible.
4. Consider adding dedicated SEO landing pages such as `/usd-to-egp`, `/eur-to-usd`, etc. with genuinely useful unique content.
5. For high traffic, cache API responses through a small backend/serverless function rather than having every visitor hit public APIs directly.

## Data
Exchange rates and currency metadata use Frankfurter's public API. Country metadata is enriched from REST Countries. The public APIs can change; for a commercial high-traffic product, consider a server-side cached data layer.
