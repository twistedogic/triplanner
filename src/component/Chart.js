import React from "react"
import Graph from "react-graph-vis"
import {random} from "lodash"

const numOfNode = 10

const nodeCreator = length => {
  const output = []
  for (let i = 0; i < length; i += 1) {
    output.push({id:i,label:`Node ${i}`})
  }
  return output
}

const edgeCreator = length => {
  const output = []
  for (let i = 0; i < length; i += 1) {
    output.push({from:i,to:random(length - 1)})
  }
  return output
}

const graph = {
  nodes:nodeCreator(numOfNode),
  edges:edgeCreator(numOfNode),
}

const options = {
  nodes: {
    shape: 'dot',
    size: 30,
    font: {
      size: 32,
      color: '#ffffff'
    },
    borderWidth: 2
  },
  edges: {
    width: 2
  },
  layout: {
    hierarchical: {
      direction: "UD",
      sortMethod: "directed"
    }
  },
  interaction: {dragNodes :false},
  physics: {
    enabled: false
  },
}

const events = {
  select: event => {
    const { nodes, edges } = event
    console.log(`nodes: ${nodes}, edges: ${edges}`)
  }
}

const Chart = () => (
  <Graph graph={graph} options={options} events={events} />
)

export default Chart
