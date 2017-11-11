d3.xml("sev.svg").mimeType("image/svg+xml").get(function(error,xml) {
	if (error) throw error;
	document.body.appendChild(xml.documentElement);

	var svg = d3.select('svg');
	
	polygons = d3.selectAll('polygon');

	polygons.on('mouseover', handleMouseOver)
	  .on('mouseout', handleMouseOut);


	  function handleMouseOver(d, i) {  // Add interactivity
      // Use D3 to select element, change color and size
		  var parcel = d3.select(this);
      d3.select(this)
	  	  .style('fill','GhostWhite');

      // Specify where to put label of text
      svg.append("text").attrs({
          id: "t" + "-1-" + i,  // Create an id for text so we can select it later for removing on mouseout
          x: 20,
          y: 425,
        })
        .text(function() {return parcel.attr('address')})  // Value of the text})
        .attr('fill','black')
        .attr('font-family','arial');
          
      svg.append("text").attrs({
          id: "t" + "-2-" + i,  // Create an id for text so we can select it later for removing on mouseout
          x: 20,
          y: 450,
        })
        .text(function() {return parcel.attr('owner')})  // Value of the text})
        .attr('fill','black')
        .attr('font-family','arial');
          

      svg.append("text").attrs({
          id: "t" + "-3-" + i,  // Create an id for text so we can select it later for removing on mouseout
          x: 20,
          y: 475,
        })
        .text(function() {return '$' + parcel.attr('sev')})  // Value of the text})
        .attr('fill','black')
        .attr('font-family','arial');
          }


      function handleMouseOut(d, i) {
            // Use D3 to select element, change color back to normal
		var color = d3.select(this).attr('c');
    d3.select(this)
	  	  .style('fill',color);
            // Select text by id and then remove
            d3.select("#t" + "-1-" + i).remove();
            d3.select("#t" + "-2-" + i).remove();
            d3.select("#t" + "-3-" + i).remove();  // Remove text location
          }

});

