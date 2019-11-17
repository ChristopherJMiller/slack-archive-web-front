const sass = require('@zeit/next-sass')
const css = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins(
  [
    [sass, {}],
    [css, {}],
    [optimizedImages, {
      handleImages: ['jpeg', 'png'],
      optimizeImages: true
    }],
  ],
  {
    compress: true,
    target: 'server',
    exportPathMap: function() {
      return {
        '/': { page: '/' }
      };
    }
  }
)
