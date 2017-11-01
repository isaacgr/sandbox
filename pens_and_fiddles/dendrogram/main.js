//Main JavaScript to generate tree diagram

var treeData = [{
  "name": "Core",
  "children": [
    {
      "name": "First Floor",
      "children": [
        {
          "name": "120 Classroom"
        },
        {
          "name": "120 Conference Room"
        }
      ]
    },
    {
      "name": "Second Floor",
      "children": [
        {
          "name":"240 Classroom"
        },
        {
          "name": "240 Lecture Hall"
        }
      ]
    },
    {
      "name": "Third Floor",
      "children": [
        {
          "name":"340 Classroom"
        },
        {
          "name": "340 Media Room"
        }
      ]
    }
  ]
}];
var i=0;
var duration = 750;
var root;
var level = 0;

//Size of the tree diagram
var viewWidth = $(document).width();
var viewHeight = $(document).height();

var tree = d3.layout.tree().size([viewHeight,viewWidth]);

//i am root
root = treeData[0];
root.x0 = viewHeight/2;
root.y0 = 0;


//diagonal projection for the paths
var diagonal = d3.svg.diagonal()
                 .projection(function(d){return[d.y, d.x];});

// define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);

//define the svg with styling
var svg = d3.select("#container").append("svg")
            .attr("width", viewWidth)
            .attr("height", viewHeight)
            .call(zoomListener)
            .append("g"); //g element is used to group svg shapes together

//shift tree to the right a bit
d3.select('g').transition()
    .attr("transform", "translate(" + 100 + "," + 0 + ")");

//compute the new height of the viewbox as more children are expanded
function update(source){

  var levelWidth = [1];
  var childCount = function(level, n) {

    if (n.children && n.children.length > 0) {
      if (levelWidth.length <= level + 1) levelWidth.push(0);

      levelWidth[level + 1] += n.children.length;
      n.children.forEach(function(d) {
        childCount(level + 1, d);
      });
    }
  };
  childCount(0, root);
  var newHeight = d3.max(levelWidth) *50;
  tree = d3.layout.tree().size([newHeight,viewWidth]);
  svg.attr("height", newHeight)
  var nodes = tree.nodes(root).reverse(),
              links = tree.links(nodes);

  //normalize widths between levels
  //500px per level
  nodes.forEach(function(d){
    d.y = (d.depth*500);
  });

  // Update the nodes
  var node = svg.selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
	  .attr("class", "node")
	  .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
	  .on("click", click);

  nodeEnter.append("circle")
           .attr("r", 1e-6)
           .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

           nodeEnter.append("circle")
  .attr('class', 'nodeCircle')
  .attr("r", 0)
  .style("fill", function(d) {
      return d._children ? "lightsteelblue" : "#fff";
  });

  nodeEnter.append("text")
      .attr("x", function(d) {
          return d.children || d._children ? -13 : 13;
      })
      .attr("dy", ".35em")
      .attr('class', 'nodeText')
      .attr("text-anchor", function(d) {
          return d.children || d._children ? "end" : "start";
      })
      .text(function(d) {
          return d.name;
      })
      .style("fill-opacity", 0);
      // Transition nodes to their new position.
       var nodeUpdate = node.transition()
     	  .duration(duration)
     	  .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

       nodeUpdate.select("circle")
     	  .attr("r", 10)
     	  .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

       nodeUpdate.select("text")
     	  .style("fill-opacity", 1);

       // Transition exiting nodes to the parent's new position.
       var nodeExit = node.exit().transition()
     	  .duration(duration)
     	  .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
     	  .remove();

       nodeExit.select("circle")
     	  .attr("r", 1e-6);

       nodeExit.select("text")
     	  .style("fill-opacity", 1e-6);

       // Update the links…
       var link = svg.selectAll("path.link")
     	  .data(links, function(d) { return d.target.id; });

       // Enter any new links at the parent's previous position.
       link.enter().insert("path", "g")
     	  .attr("class", "link")
     	  .attr("d", function(d) {
     		var o = {x: source.x0, y: source.y0};
     		return diagonal({source: o, target: o});
     	  });

       // Transition links to their new position.
       link.transition()
     	  .duration(duration)
     	  .attr("d", diagonal);

       // Transition exiting nodes to the parent's new position.
       link.exit().transition()
     	  .duration(duration)
     	  .attr("d", function(d) {
     		var o = {x: source.x, y: source.y};
     		return diagonal({source: o, target: o});
     	  })
     	  .remove();

       // Stash the old positions for transition.
       nodes.forEach(function(d) {
     	d.x0 = d.x;
     	d.y0 = d.y;
       });
    }
// Toggle children on click.
function click(d) {
  console.log(d);
  if (d.children) {
	d._children = d.children;
	d.children = null;
  } else {
	d.children = d._children;
	d._children = null;
  }
  centerNode(d);
  update(d);
}

// Define the zoom function for the zoomable tree

function zoom() {
    svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
}

function centerNode(source){
  scale = zoomListener.scale();
  x = -source.y0;
  y = -source.x0;
  x = x*scale + viewWidth/2;
  y = y*scale+ viewHeight/2

  d3.select('g').transition()
    .duration(duration)
    .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
  zoomListener.scale(scale);
  zoomListener.translate([x,y]);
}
// Returns a list of all nodes under the root.
function toggleAll(d) {
  if (d.children) {
    d.children.forEach(toggleAll);
    toggle(d);
    console.log(d);
  }
}

// Toggle children.
function toggle(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
}

window.onload = function(){
   update(root);
}

root.children.forEach(toggleAll);
