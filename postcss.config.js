const {resolve} = require('path');

module.exports = {
    plugins: [
        require('postcss-import')({
            path: [resolve(__dirname, 'src', 'styles')]
        }),
        require('postcss-cssnext')()
    ]
};
