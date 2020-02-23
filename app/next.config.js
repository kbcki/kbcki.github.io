const withSass = require('@zeit/next-sass');

module.exports = withSass({
    sassLoaderOptions: {
        includePaths: ['src/theme']
    },
    exportTrailingSlash: true,
    exportPathMap: function () {
        return {
            '/': { page: '/' }
        };
    }
});
