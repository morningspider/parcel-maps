d3.xml("most_recent_sale.svg").mimeType("image/svg+xml").get(function(error,xml) {
	if (error) throw error;
	document.body.appendChild(xml.documentElement);

	var svg = d3.select('svg');
	
	polygons = d3.selectAll('polygon');

	polygons.on('mouseover', function(){
	  	d3.select(this)
	  	  .style('fill','WhiteSmoke');
	  })
	  .on('mouseout', function(){
	  	console.log(d3.select(this).attr('id'));
	  	d3.select(this)
	  	  .style('fill',d3.select(this).attr('c'));
	  	  console.log(d3.select(this).attr('c'));
	  });

});

