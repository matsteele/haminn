$('.modal').on('shown.bs.modal', function (e) {
    $('.mainCarousel').carousel('pause');
})

var textData = [
	{"name": "4.1", "x": 775,	"y": 250},
	{"name": "4.2", "x": 580, 	"y": 225},
	{"name": "4.3", "x": 410, 	"y": 140},
	{"name": "3.2", "x": 387, 	"y": 320},
	{"name": "2.2", "x": 400, 	"y": 510},
	{"name": "1.1", "x": 775,	"y": 853},
	{"name": "1.2", "x": 360, 	"y": 690},
	{"name": "Den", "x": 625, 	"y": 1030}
];

var svgContainer = d3.select("svg");
	
svgContainer.selectAll("text")
	.data(textData)
	.enter()
	.append("text")
	.text(function(d,i) { return d.name; })
	.attr("x", function(d) {
		return d.x;
	})
	.attr("y", function(d) {
		return d.y;
	})
	.style("fill", "white")
	.style("font-size", "40px")
	.style("cursor", "pointer");