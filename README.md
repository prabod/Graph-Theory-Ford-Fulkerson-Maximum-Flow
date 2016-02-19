# graph-theory-ford-fulkerson

> Ford-Fulkerson Algorithm for Maximum Flow Problem

## Introduction

*A very short explanation of the flow network problem goes here. Would be nice to include a quick link to wikpedia or other easily accessible reference material*

## Example

*A picture corresponding to the problem below would be outstanding*

```javascript
var fordFulkerson = require('graph-theory-ford-fulkerson');

var graph = [
	[ 0, 16,  13, 0,  0,  0 ],
  [ 0,  0, 10, 12,  0,  0 ],
  [ 0,  4,  0,  0, 14,  0 ],
  [ 0,  0,  9,  0,  0, 20 ],
  [ 0,  0,  0,  7,  0,  4 ],
  [ 0,  0,  0,  0,  0,  0 ]
];

console.log("The maximum possible flow is " +
	fordFulkerson(graph, 0, 5));
```

## Usage

#### `require('graph-theory-ford-fulkerson')( graph, source, sink )
Compute the maximum flow in a flow network between source node `source` and sink node `sink`.

**Arguments:**
- `graph`: ...
- `source`: ...
- `sink`: ...

**Returns:** Returns a number representing the maximum flow. *Document failure modes here*

## License

&copy; 2016 Prabod Rathnayaka. MIT License.
