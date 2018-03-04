let webpack = require('webpack');

class Extract {
    constructor() {
        this.entry = null
        this.extractions = [];
    }

    register(libs, output) {
        this.extractions.push({ libs, output });
    }

    webpackEntry(entry) {
        this.entry = entry
    }
}

module.exports = Extract;
