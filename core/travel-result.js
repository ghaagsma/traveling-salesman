(() => {
    'use strict';

    let getLetter = (index) => {
        return String.fromCharCode('A'.charCodeAt(0) + index);
    };

    class TravelResult {
        constructor(node) {
            this.cost = node.cost;
            this.path = '';
            while (node) {
                let curr = getLetter(node.curr);
                this.path = this.path.length > 0 ?
                    `${curr} -> ${this.path}` : `${curr}`;
                node = node.prev;
            }
        }

        toString() {
            return `{ Cost: ${this.cost}, Path: ${this.path} }`;
        }
    }

    module.exports = TravelResult;
})();
