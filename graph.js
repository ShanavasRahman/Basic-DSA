class Graph{
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = [];
        }
    }

    addEdge(vertex,...vertices) {
        for (let otherVertex of vertices) {
            if (this.adjList[vertex]) {
                this.adjList[vertex].push(otherVertex);
                this.adjList[otherVertex].push(vertex);
            }
        }
    }

    bfs(startingVertex) {
        const queue = [startingVertex];
        const visited = {};
        visited[startingVertex] = true;
        while (queue.length > 0) {
            const currentVertex = queue.shift();
            console.log(currentVertex);

            this.adjList[currentVertex].forEach(element => {
                if (!visited[element]) {
                    visited[element] = true;
                    queue.push(element);
                }
            });
        }
    }

    print() {
        for (let vertex in this.adjList) {
            console.log(`${vertex} ---> ${this.adjList[vertex].join(',')}`);
        }
    }
}


const g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")

g.addEdge("A", "B","C");
g.addEdge("B", "C");
g.addEdge("C", "D");
g.addEdge("D", "A");

g.print()


