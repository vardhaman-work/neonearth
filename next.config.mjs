/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // ✅ Enables static export
    images: {
      unoptimized: true, // ✅ Fix for images in static export
    }
  };
  
  export default nextConfig;
  