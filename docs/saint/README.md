# Saint Documentation Site

This is the documentation website for [Saint](https://github.com/danilloestrela/saint) - the Intelligent Project Management System.

## Development

### Prerequisites

- Node.js 18.0 or above
- pnpm (recommended) or npm

### Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run start

# Build for production
pnpm run build

# Serve production build
pnpm run serve
```

### Project Structure

- `docs/` - Documentation markdown files
- `src/` - React components and pages
- `static/` - Static assets (images, etc.)
- `docusaurus.config.ts` - Main configuration
- `sidebars.ts` - Documentation sidebar structure

## Deployment

This site is configured for GitHub Pages deployment at `https://danilloestrela.github.io/saint`.

The site will automatically deploy when changes are pushed to the `master` branch.

## Contributing

To contribute to the documentation:

1. Make your changes in the `docs/` directory
2. Test locally with `pnpm run start`
3. Submit a pull request

For more information, see the [Contributing Guide](https://github.com/danilloestrela/saint/blob/main/CONTRIBUTING.md).
