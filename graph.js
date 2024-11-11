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

            this.adjList[currentVertex].forEach(neighbourVertex => {
                if (!visited[neighbourVertex]) {
                    visited[neighbourVertex] = true;
                    queue.push(neighbourVertex);
                }
            });
        }
    }

    dfs(startingVertex) {
        const stack = [startingVertex];
        const visited = {};
        while (stack.length > 0) {
            const currentVertex = stack.pop();
            if (!visited[currentVertex]) {
                visited[currentVertex] = true;
                console.log(currentVertex);

                for (let i = 0; i < this.adjList[currentVertex].length; i++){
                    const neighbour = this.adjList[currentVertex][i];
                    if (!visited[neighbour]) {
                        stack.push(neighbour);
                    }
                }
            }
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

g.bfs("A");


