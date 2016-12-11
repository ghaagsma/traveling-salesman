(() => {
    'use strict';

    let now = require('performance-now'),
        inputParser = require('../../euler/solutions/euler-common/src/input-parser'),
        parser = require('./core/parser'),
        output = require('./core/output'),
        core = require('./core/core');

    let startTime = now();

    const defaultTarget = 0;

    let argument = process.argv[2],
        target = inputParser.isInteger(argument) ?
        parseInt(argument) : defaultTarget;

    let solve = (model) => {
        output.printLine('Cost model:');
        output.printModel(model);

        let result = core.getSolution(target);
        output.printLine(`The answer is ${result}.`);

        let duration = (now() - startTime).toFixed(3);
        output.printLine(`Execution time: ${duration}ms`);
    };

    parser.parseFileAsync(`./input/test-${target}.txt`, solve);
})();
