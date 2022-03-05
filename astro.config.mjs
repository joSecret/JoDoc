export default {
  // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  // pages: './src/pages', // Path to Astro components, pages, and data
  dist: './docs',
  public: './public',
  buildOptions: {
    site: 'https://josecret.github.io/JoDoc/',
    sitemap: true,
  },
  devOptions: {
    // hostname: 'jodoc',
    // port: 3000,
  },
  renderers: [
    "@astrojs/renderer-preact",
    "@astrojs/renderer-react"
  ],
};
