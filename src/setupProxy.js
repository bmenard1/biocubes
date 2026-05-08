const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Path to match
    createProxyMiddleware({
      target: 'https://menard.pha.jhu.edu/', // Your target server
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Optionally rewrite the path
      },
    })
  );
};
