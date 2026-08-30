import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: build ra HTML/CSS/JS tĩnh trong thư mục `out/`
  // để upload trực tiếp lên hosting tĩnh (vd. Hostinger) qua File Manager/FTP.
  output: "export",
  // Mỗi route xuất ra dạng thư mục + index.html (vd. /about/index.html)
  // để hosting Apache/LiteSpeed phục vụ đúng mà không cần cấu hình rewrite.
  trailingSlash: true,
  images: {
    // Image Optimization mặc định cần server Node.js, không hoạt động với static export.
    unoptimized: true,
  },
};

export default nextConfig;
