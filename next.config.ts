import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Indispensable pour GitHub Pages
  basePath: '/portfolio', // Remplace par le nom exact de ton dépôt
  images: {
    unoptimized: true, // GitHub Pages ne supporte pas l'optimisation d'image native de Next
  },
};

export default nextConfig;
