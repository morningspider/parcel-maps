d3.xml("sev.svg").mimeType("image/svg+xml").get(function(error,xml) {
	if (error) throw error;
	document.body.appendChild(xml.documentElement);

	var svg = d3.select('svg');

  svg.append('rect').attrs({
      x: 425,
      y: 605,
      width:325,
      height:60,
      rx:5,
      ry:5,
      fill:'GhostWhite',
      opacity: 0.8 })
  svg.append('image').attrs({
    x: 390,
    y: 600,
    width: 400,
    height: 66
  })
    .attr('xlink:href','colorbar.png');
	polygons = d3.selectAll('polygon');

	polygons.on('mouseover', handleMouseOver)
	  .on('mouseout', handleMouseOut);

  polygons.each(function(){
    var parcel = d3.select(this);
    if(parcel.attr('sev') == '0'){
      parcel.style('fill','gray');
      parcel.attr('c','gray');
    }
  })
	  function handleMouseOver(d, i) {  // Add interactivity
		  var parcel = d3.select(this);
      d3.select(this)
	  	  .style('fill','GhostWhite');

      svg.append('rect').attrs({
        id: 'rect',
        x: 10,
        y: 420,
        width:280,
        height:70,
        rx:5,
        ry:5,
        fill:parcel.attr('c'),
        stroke: 'grey',
        opacity:0.6

      })
      // Specify where to put label of text
      svg.append("text").attrs({
          id: "t" + "-1-" + i,  // Create an id for text so we can select it later for removing on mouseout
          x: 20,
          y: 440,
        })
        .text(function() {return parcel.attr('address')})  // Value of the text})
        .attr('fill','Black')
        .attr('font-family','arial')
        .attr('font-size','12px');
          
      svg.append("text").attrs({
          id: "t" + "-2-" + i,  // Create an id for text so we can select it later for removing on mouseout
          x: 20,
          y: 460,
        })
        .text(function() {return parcel.attr('owner')})  // Value of the text})
        .attr('fill','Black')
        .attr('font-family','arial')
        .attr('font-size','12px');  
          

      svg.append("text").attrs({
          id: "t" + "-3-" + i,  // Create an id for text so we can select it later for removing on mouseout
          x: 20,
          y: 480,
        })
        .text(function() {return '$' + Number(parcel.attr('sev')).toLocaleString()})  // Value of the text})
        .attr('fill','Black')
        .attr('font-family','arial')
        .attr('font-size','12px');
          }


      function handleMouseOut(d, i) {
            // Use D3 to select element, change color back to normal
		var color = d3.select(this).attr('c');
    d3.select(this)
	  	  .style('fill',color);
            // Select text by id and then remove
            d3.select("#t" + "-1-" + i).remove();
            d3.select("#t" + "-2-" + i).remove();
            d3.select("#t" + "-3-" + i).remove();
            d3.select('#rect').remove();  // Remove text location
          }

});

