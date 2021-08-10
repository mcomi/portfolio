const nextConfig = {}

const withTM = require('next-transpile-modules')([
    'remark-slug',
    'remark-autolink-headings',
    'mdast-util-to-string',
    'mdast-util-toc',
    'to-vfile',
    'remark-toc'
]);

module.exports = withTM(nextConfig)