(() => {
    'use strict';

    class TravelResult {
        constructor(node) {
            this.cost = node.cost;
            this.path = '';
            while (node) {
                this.path = this.path.length > 0 ?
                    `${node.curr} -> ${this.path}` : `${node.curr}`;
                node = node.prev;
            }
        }

        toString() {
            return `{ Cost: ${this.cost}, Path: ${this.path} }`;
        }
    }

    module.exports = TravelResult;
})();
