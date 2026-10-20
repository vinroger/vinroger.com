/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  // The launch video and the README link to /projects/openverdict: serve the report there, at the same address.
  async rewrites() {
    return [
      { source: '/projects/openverdict', destination: '/projects/openverdict/report.pdf' },
      { source: '/projects/openverdict.pdf', destination: '/projects/openverdict/report.pdf' },
    ];
  },
};

module.exports = nextConfig;
