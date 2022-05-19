// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true
    
// }

// module.exports = nextConfig

module.exports = {
  images: {
    domains: ["ibb.co", "encrypted-tbn2.gstatic.com", "i.ibb.co"],
  },

  webpack: (config) => {
    config.experiments = { topLevelAwait: true };
    return config;
  },
};