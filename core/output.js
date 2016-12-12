(() => {
    'use strict';

    let dbg;

    let debug = (msg) => {
        if (dbg)
            console.log(msg);
    };

    let getLetter = (index) => {
        return String.fromCharCode('A'.charCodeAt(0) + index);
    };

    let printTopRow = (n) => {
        let str = '  ';
        for (let i = 0; i < n; ++i) {
            str += `${getLetter(i)}   `;
        }
        writeLine(str);
    };

    let getFormattedValue = (value) => {
        if (value < 10)
            return `00${value}`;
        if (value < 100)
            return `0${value}`;
        return `${value}`;
    };

    let printRow = (row, index) => {
        let formattedRow = row.map(getFormattedValue),
            str = `${getLetter(index)} ${formattedRow.join(' ')}`;
        writeLine(str);
    };

    let printModel = (model) => {
        printTopRow(model.length);
        model.map(printRow);
    };

    let printQueue = (queue) => {
        debug('Queue:');
        queue.map((node) => {
            debug(node.toString());
        });
        debug(' ');
    };

    let printResult = (result) => {
        writeLine(`The optimal path is ${result}.`);
    };

    let setDebug = (d) => {
        dbg = d;
    };

    let writeLine = (str) => {
        console.log(str);
    };

    module.exports = {
        debug: debug,
        printModel: printModel,
        printQueue: printQueue,
        printResult: printResult,
        setDebug: setDebug,
        writeLine: writeLine
    };
})();
