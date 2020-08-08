const PROXY_CONFIG = [{
  context: ["/rest/**"],
  target: "http://localhost:8080",
  secure: false,
  changeOrigin: true,
  onProxyReq: function (proxyReq, req, res) {
    console.log('Using proxy to forward request');
  }
}];

module.exports = PROXY_CONFIG;
