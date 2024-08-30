class Graph{
    constructor() {
        this.adjacencyList = {};
    }


    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }


    addEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push(v2);
            this.adjacencyList[v2].push(v1);
        }
    }

    print() {
        for (let vertex in this.adjacencyList) {
            console.log(`${vertex} --> ${this.adjacencyList[vertex]}`);
        }
    }
}


const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");

g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("C", "D");
g.addEdge("D", "E");
g.addEdge("E", "A");

g.print();



