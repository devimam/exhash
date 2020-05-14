module.exports = ({ ...args }) => {
    const env = args[2];
    return {
        plugins: {
            'autoprefixer': env === 'development'
                ? false
                : { browsers: ['last 2 versions', 'iOS >= 8'] }
        }
    };
};