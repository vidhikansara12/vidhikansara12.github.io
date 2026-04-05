/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static HTML/CSS/JS for GitHub Pages (no Node server)
  output: "export",
  images: {
    unoptimized: true,
  },
  // Helps static hosts resolve index routes consistently
  trailingSlash: true,
};

export default nextConfig;
