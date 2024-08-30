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
        
    }
}




