module.exports = {
  ci: {
    collect: {
      settings: {chromeFlags: '--no-sandbox'},
    },
    assert: {
      preset: 'lighthouse:recommended',
    //   assertions: {
    //     'uses-rel-preload': 'off',
    //     'uses-rel-preconnect': 'off',
    //   },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};