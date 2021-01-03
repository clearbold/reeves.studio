// Import transforms
const htmlMinTransform = require('./src/transforms/html-min-transform.js');

module.exports = function(config) {

  // Layout aliases
  config.addLayoutAlias('home', 'layouts/home.njk');

  // Transforms
  config.addTransform('htmlmin', htmlMinTransform);

  // Passthrough copy
  config.addPassthroughCopy('src/ui/fonts');
  config.addPassthroughCopy('src/ui/img');
  config.addPassthroughCopy('src/ui/js');
  config.addPassthroughCopy('src/ui/css');
  // config.addPassthroughCopy('src/admin/config.yml');
  // config.addPassthroughCopy('src/admin/previews.js');
  // config.addPassthroughCopy('node_modules/nunjucks/browser/nunjucks-slim.js');
  config.addPassthroughCopy('src/robots.txt');

  config.setUseGitIgnore(false);

  return {

    dir: {
      input: 'src',
      output: 'build'
    },
    passthroughFileCopy: true

  };
};
