// const withTypescript = require('@zeit/next-typescript');
// module.exports = withTypescript();

// const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass')  // Add this declaration
// We modified the code earlier to add Sass 
module.exports = withSass({
    sassLoaderOptions: {}
});
