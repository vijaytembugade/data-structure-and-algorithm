class Graph {
  //We are showing a graph here as adjacencyList which will look like 
  //{A:[B,C], B:[A], C:[A]}
  constructor(){
    this.adList = {}
  }

  addVertext (vertext){
    if(!this.adList[vertext]){
      this.adList[vertext] = []
      return true
    }
    return false
  }

  addEdge(v1, v2){
    if(this.adList[v1] && this.adList[v2]){
      this.adList[v1].push(v2)
      this.adList[v2].push(v1)
      return true
    }
    return false
  }

  removeEdge(v1, v2){
    if(this.adList[v1] && this.adList[v2]){
      this.adList[v1] = this.adList[v1].filter(v=> v!==v2)
      this.adList[v2] = this.adList[v2].filter(v=> v!==v1)
      return true
    }
    return false
  }

  removeVertex(vertex){
    if(!this.adList[vertex]) return undefined;
    while(this.adList[vertex].length){
      let temp = this.adList[vertex].pop()
      this.removeEdge(vertex, temp)
    }
    delete this.adList[vertex]
    return this
  }

}

let myGraph = new Graph 
myGraph.addVertext('A')
myGraph.addVertext('B')
myGraph.addVertext('C')
myGraph.addEdge('A', 'B')
myGraph.addEdge('A', 'C')
myGraph.addEdge('C', 'B')
console.log(myGraph)
console.log("_______________________________________")
myGraph.removeEdge('A', 'C')
console.log(myGraph)
console.log("_______________________________________")
myGraph.removeVertex('C')
console.log(myGraph)