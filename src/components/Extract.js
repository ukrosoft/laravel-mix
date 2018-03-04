let webpack = require('webpack');

class Extract {
    constructor() {
        this.extractions = [];
    }

    register(libs, output) {
        this.extractions.push({ libs, output });
    }

    webpackEntry(entry) {
        this.extractions = this.extractions.map(
            entry.addExtraction.bind(entry)
        );

        // If we are extracting vendor libraries, then we also need
        // to extract Webpack's manifest file to assist with caching.
        if (this.extractions.length) {
            this.extractions.push(
                path.join(entry.base, 'manifest').replace(/\\/g, '/')
            );
        }
    }
}

module.exports = Extract;
