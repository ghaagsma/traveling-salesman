(() => {
    'use strict';

    let printLine = (msg) => {
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
        printLine(str);
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
        printLine(str);
    };

    let printModel = (model) => {
        printTopRow(model.length);
        model.map(printRow);
    };

    module.exports = {
        printLine: printLine,
        printModel: printModel
    };
})();
