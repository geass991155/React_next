const withImages = require("next-images");

module.exports = withImages({
  async rewrites() {
    const pathArr = [
      // 暫時關閉的選單
      
    ];

    if (process.env.NODE_ENV === "development") {
      pathArr.push({
        source: "/images/:path*",
        destination: "https://tmofa.justher.tw/images/:path*",
      });
    }

    return pathArr;
  },
  poweredByHeader: false,
});
