(() => {
    'use strict';

    class Node {
        constructor(curr, prev, cost, visited) {
            this.curr = curr;
            this.prev = prev;
            this.cost = cost;
            this.visited = visited;
        }

        toString() {
            return `{ Curr: ${this.curr}, ` +
                `Prev: ${this.prev}, ` +
                `Cost: ${this.cost}, ` +
                `Visited: [${this.visited}] }`;
        }
    }

    module.exports = Node;
})();
