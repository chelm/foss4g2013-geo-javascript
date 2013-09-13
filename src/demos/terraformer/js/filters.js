function updateFilter ( aggregation ) {
  
  var data = [],
    width = 300,
    height = 75;

  for ( var val in aggregation ) {
    data.push( parseFloat( aggregation[ val ]) );
  }

  var min = Math.min.apply(null, data),
      max = Math.max.apply(null, data),
      format = d3.time.format("%Y-%m-%d"),
      formatTime = function(d) {
        return format(new Date(d));
      };
      //formatxAxis = ( filter.type === "date" ) ? formatTime : d3.format(",.0f");                  

  var x = d3.scale.linear()
      .domain([min, max])
      .range([0, width]);
      
  var x2 = d3.scale.linear()
      .domain(x.domain())
      .range([0, width]);
  
  // Generate a histogram using twenty uniformly-spaced bins.
  var histogram = d3.layout.histogram()
      .bins( 20 )
      ( data );
  
  var y = d3.scale.linear()
      .domain([0, d3.max(histogram, function(d) { return d.y; })])
      .range([height, 0]);
      
  var yAxis = d3.svg.axis()
    .ticks(2)
    .tickSubdivide(1)
    .scale(y)
    .tickSize(3, 2, 0)
    .tickFormat(d3.format(",.0f"))
    .orient("left");
    
  var xAxis = d3.svg.axis()
    .scale(x)
    .ticks(4)
    //.tickFormat( formatxAxis )
    .orient("bottom");
  
  var brush = d3.svg.brush()
      .x(x2)
      .on( "brush", brushed );
  
  document.getElementById('histogram').style.display = "block";
  d3.select('.histogram-svg').remove();

  var svg = d3.select('#histogram').append("svg")
      .attr('class', 'histogram-svg');
  
  var context = svg.append("g")
      .attr("transform", "translate(" + 30 + "," + 5 + ")");
      
  var bar = context.selectAll(".bar")
      .data(histogram)
    .enter().append("g")
      .attr("class", "bar")
      .attr("transform", function(d) { return "translate(" + x(d.x) + "," + y(d.y) + ")"; });
  
  bar.append("rect")
      .attr("x", 1)
      .attr("width", 15)
      .attr("height", function(d) { return height - y(d.y); });
  
  context.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);
  
  context.append("g")
    .attr("class", "y axis")
    .call(yAxis);
  
  context.append("g")
      .attr("class", "filter-brush")
      .call(brush)
    .selectAll("rect")
      .attr("y", -6)
      .attr("height", height + 7);
  
  function brushed() {
    
    x.domain(brush.empty() ? x2.domain() : brush.extent());
    var min = brush.extent()[0];
    var max = brush.extent()[1];
    
    console.log('min', min, 'max', max);
  }


}