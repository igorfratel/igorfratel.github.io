var elems = [];
document.getElementById('openFile').addEventListener("change", function() {
    var fr = new FileReader();
    fr.onload = function(){
        var i = 0;
        var lines = this.result.split('\n');
        for(var i = 0; i < lines.length-1; i++){
          var words = lines[i].split(" ");
          elems.push({group: "nodes",data: {id: words[0], name: words[0], nodecolor: '#88cc88'}});
          elems.push({group: "nodes", data: {id: words[1], name: words[1], nodecolor: '#88cc88'}});
          elems.push({group: "edges", data: { id: "e".concat(i.toString()), source: words[0], target: words[1], "weight": parseFloat(words[2])}});
        }
        var cy = cytoscape({
           container: document.getElementById('cy'),
           elements: elems,
           style: cytoscape.stylesheet()
                   .selector('node').style({
                       //'background-color': 'data(nodecolor)',
                       label: 'data(name)',
                       width: 25,
                       height: 25
                   })
                   .selector('edge').style({
                      // 'line-color': 'data(linkcolor)',
                       width: 3
                   })
        });
        var options = {
          name: 'cose',

          // Called on `layoutready`
          ready: function(){},

          // Called on `layoutstop`
          stop: function(){},

          // Whether to animate while running the layout
          // true : Animate continuously as the layout is running
          // false : Just show the end result
          // 'end' : Animate with the end result, from the initial positions to the end positions
          animate: true,

          // Easing of the animation for animate:'end'
          animationEasing: undefined,

          // The duration of the animation for animate:'end'
          animationDuration: undefined,

          // A function that determines whether the node should be animated
          // All nodes animated by default on animate enabled
          // Non-animated nodes are positioned immediately when the layout starts
          animateFilter: function ( node, i ){ return true; },


          // The layout animates only after this many milliseconds for animate:true
          // (prevents flashing on fast runs)
          animationThreshold: 250,

          // Number of iterations between consecutive screen positions update
          // (0 -> only updated on the end)
          refresh: 20,

          // Whether to fit the network view after when done
          fit: true,

          // Padding on fit
          padding: 30,

          // Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
          boundingBox: undefined,

          // Excludes the label when calculating node bounding boxes for the layout algorithm
          nodeDimensionsIncludeLabels: false,

          // Randomize the initial positions of the nodes (true) or use existing positions (false)
          randomize: false,

          // Extra spacing between components in non-compound graphs
          componentSpacing: 40,

          // Node repulsion (non overlapping) multiplier
          nodeRepulsion: 400000,

          // Node repulsion (overlapping) multiplier
          nodeOverlap: 4,

          // Ideal edge (non nested) length
          idealEdgeLength: function (edge) {
                // Default is: 10
                // Instead, base it on "weight"
                if (edge.data().weight == 0){
                    return 100;
                }
                return 100/edge.data().weight;
              },

          // Divisor to compute edge forces
          edgeElasticity: function (edge) {
                // Default is: 100
                // Instead, base it on "weight"
                if (edge.data().weight == 0){
                    return 100;
                }
                return 100/edge.data().weight;
              },

          // Nesting factor (multiplier) to compute ideal edge length for nested edges
          nestingFactor: 1.2,

          // Gravity force (constant)
          gravity: 1,

          // Maximum number of iterations to perform
          numIter: 1000,

          // Initial temperature (maximum node displacement)
          initialTemp: 1000,

          // Cooling factor (how the temperature is reduced between consecutive iterations
          coolingFactor: 0.99,

          // Lower temperature threshold (below this point the layout will end)
          minTemp: 1.0,

          // Pass a reference to weaver to use threads for calculations
          weaver: false
        };
        var layout = cy.layout(options);
        layout.run();
    }
    fr.readAsText(this.files[0]);

})
