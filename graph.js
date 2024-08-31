class Graph{
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjList[vertex1] && this.adjList[vertex2]) {
            this.adjList[vertex1].push(vertex2);
            this.adjList[vertex2].push(vertex1);
        }
    }




    print() {
        for (let vertex in this.adjList) {
            console.log(`${vertex} ---> ${this.adjList[vertex].join(", ")}`);
        }
    }
}

const g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")

g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("C", "D");
g.addEdge("D", "A");

g.print()


