import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const baseConfig: NextConfig = {
  /* config options here */
  
};

// Initialize the Next-Intl plugin
let configWithPlugins = createNextIntlPlugin('./libs/I18n.ts')(baseConfig);

const nextConfig: NextConfig = {
  ...configWithPlugins,
  // You can add more custom Next.js configuration options here if needed
};

export default nextConfig;
