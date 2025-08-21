````markdown
# React + Tailwind CSS Project

Modern React application with Tailwind CSS and ngrok integration for performance testing.

## Quick Start

```bash
# Install dependencies
npm run install

# Start development
npm run dev

# Build production
npm run build

# Preview production
npm run preview
````

## Testing Workflow

1. Build and preview the project:

   ```bash
   npm run build && npm run preview
   ```

   The preview server runs on [http://localhost:4173](http://localhost:4173).



2. Run **Lighthouse** for performance testing:

   ```bash
   lighthouse http://localhost:4173 --output=html --output-path=./lighthouse-complete.html
   ```

3. Alternatively, test manually at [PageSpeed Insights](https://pagespeed.web.dev).

## Troubleshooting

* **"Invalid Host header"**: Add ngrok domains to `allowedHosts` in `vite.config.ts`.
* **Connection refused**: Ensure preview server is running on port `4173`.
* **Slow performance**: Free ngrok has bandwidth limits.

## Scripts

* `npm run dev` - Start development server
* `npm run build` - Build for production
* `npm run preview` - Preview production build

```