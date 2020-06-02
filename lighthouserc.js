module.exports = {
  ci: {
    collect: {
      settings: {chromeFlags: '--no-sandbox'},
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'apple-touch-icon': 'off',
        'installable-manifest': 'off',
        'splash-screen': 'off',
        'render-blocking-resources': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};