(() => {
    'use strict';

    let fs = require('fs'),
        readline = require('readline');

    let model = [];

    let parseLine = (line) => {
        model.push(line.split(' '));
    };

    let onEnd = (callback) => {
        return () => {
            callback(model);
        };
    };

    let parseFileAsync = (filepath, callback) => {
        readline.createInterface({
                input: fs.createReadStream(filepath),
                terminal: false
            })
            .on('line', parseLine)
            .on('close', onEnd(callback));
    };

    module.exports = {
        parseFileAsync: parseFileAsync
    };
})();
