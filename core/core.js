(() => {
    'use strict';

    let Node = require('./node'),
        output = require('./output'),
        TravelResult = require('./travel-result');

    let getCost = (fromNode, toNode, model) => {
        return parseInt(model[fromNode][toNode]);
    };

    let addVisited = (visited, curr) => {
        return (visited + curr).split('').sort().join('');
    };

    let buildNode = (previousNodes, curr, model) => {
        let n = previousNodes.length,
            minCost = -1,
            result;

        output.debug(`Choosing best node from which to make step. ${n} option(s).`);
        for (let i = 0; i < n; ++i) {
            let prev = previousNodes[i],
                cost = prev.cost + getCost(prev.curr, curr, model);
            output.debug(`  Checking ${prev.curr} to ${curr}. Cost is ${cost}.`);
            if (i === 0 || cost < minCost) {
                output.debug(`  Success! New optimum prev node.`);
                result = new Node(
                    curr, prev, cost, addVisited(prev.visited, curr));
                minCost = cost;
            }
        }

        return result;
    };

    let getNextStep = (queue, model, n) => {
        let nextQueue = [],
            visited = {};

        // Group queue nodes by visited state
        queue.map((node) => {
            let v = node.visited;
            if (!visited[v])
                visited[v] = [];
            visited[v].push(node);
        });

        // For each visited state
        for (let v in visited) {
            if (visited.hasOwnProperty(v)) {
                for (let i = 1; i < n; ++i) {
                    // For each node not previously visited
                    if (v.indexOf(i) === -1) {
                        // Build cheapest next-step node and push to queue
                        nextQueue.push(buildNode(visited[v], i, model));
                    }
                }
            }
        }

        return nextQueue;
    };

    let getSolution = (model) => {
        let queue = [],
            n = model.length;

        queue.push(new Node(0, null, 0, '0'));

        for (let i = 1; i < n; ++i) {
            output.printQueue(queue);
            queue = getNextStep(queue, model, n);
        }

        output.printQueue(queue);
        let finalNode = buildNode(queue, 0, model);
        return new TravelResult(finalNode);
    };

    module.exports = {
        getSolution: getSolution
    };
})();
