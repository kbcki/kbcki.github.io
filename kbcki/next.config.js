const withSass = require('@zeit/next-sass');

module.exports = withSass({
    sassLoaderOptions: {},
    exportTrailingSlash: true,
    exportPathMap: function () {
        return {
            '/': { page: '/' }
        };
    }
});
