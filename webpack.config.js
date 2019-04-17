const dev = require('./webpack/dev');

module.exports = (env) => {
    if (env.dev) {
        return dev;
    }
}
