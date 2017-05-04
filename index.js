(() => {
    'use strict';

    let now = require('performance-now'),
        inputParser = require('../../euler/solutions/euler-common/src/input-parser'),
        parser = require('./core/parser'),
        output = require('./core/output'),
        core = require('./core/core');

    let startTime = now();

    const defaultTarget = 0;

    let target = inputParser.isInteger(process.argv[2]) ?
        parseInt(process.argv[2]) : defaultTarget;

    output.setDebug(process.argv[3]);

    let solve = (model) => {
        output.printModel(model);

        output.printResult(core.getSolution(model));

        let duration = (now() - startTime).toFixed(3);
        output.writeLine(`Execution time: ${duration}ms`);
    };

    parser.parseFileAsync(`./input/test-${target}.txt`, solve);
})();
