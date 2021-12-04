module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://tespraktek.herokuapp.com/api/:path*",
      },
    ];
  },
};
