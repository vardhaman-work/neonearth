/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // ✅ Enables static export
    images: {
      unoptimized: true, // ✅ Fix for images in static export
    },
    basePath: "/neonearth", // ✅ Change to your GitHub repo name
    assetPrefix: "/neonearth/", // ✅ Prefix for assets
  };
  
  export default nextConfig;
  