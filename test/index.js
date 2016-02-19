'use strict'

var fordFulkerson = require('../index');
var test = require('tape');

test('a basic example', function(t) {
  var graph = [
    [ 0, 16, 13,  0,  0,  0 ],
    [ 0,  0, 10, 12,  0,  0 ],
    [ 0,  4,  0,  0, 14,  0 ],
    [ 0,  0,  9,  0,  0, 20 ],
    [ 0,  0,  0,  7,  0,  4 ],
    [ 0,  0,  0,  0,  0,  0 ]
  ];

  var flow = fordFulkerson(graph, 0, 5);

  t.equal(flow, 23);

  t.end()
})

test('for invalid source or sink', function(t) {
  var graph = [
    [ 0, 16, 13,  0,  0,  0 ],
    [ 0,  0, 10, 12,  0,  0 ],
    [ 0,  4,  0,  0, 14,  0 ],
    [ 0,  0,  9,  0,  0, 20 ],
    [ 0,  0,  0,  7,  0,  4 ],
    [ 0,  0,  0,  0,  0,  0 ]
  ];

  t.throws(function() {fordFulkerson(graph, 0, 6)});
  t.throws(function() {fordFulkerson(graph, -1, 5)});
  t.throws(function() {fordFulkerson(graph, 0, -1)});
  t.end()
})
test('for invalid graph which is not size of NxN ', function(t) {
  var graph = [
    [ 0, 16, 13,  0,  0,  0 ],
    [ 0,  0, 10, 12],
    [ 0,  4,  0,  0, 14,  0 ],
    [ 0,  0,  9,  0,  0, 20 ],
    [ 0,  0,  0,  7,  0,  4 ],
    [ 0,  0,  0,  0,  0,  0 ]
  ];

  t.throws(function() {fordFulkerson(graph, 0, 5)});
  t.end();
})

test('for invalid graph which is not size of NxN ', function(t) {
  var graph = [];

  t.throws(function() {fordFulkerson(graph, 0, 5)});
  t.end();
})
