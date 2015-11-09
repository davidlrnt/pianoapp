document.addEventListener("keypress", function(e){
	console.log(e)
});
document.addEventListener("keydown", function(e){
	console.log(e)
});
document.addEventListener("keyup", function(e){
	console.log(e)
});

var canvas = document.getElementById('keyboard');

if (canvas.getContext){
  	var ctx = canvas.getContext('2d');
  	var width = canvas.width;
	var height = canvas.height;
	ctx.beginPath();
	var divide = width/52
	while (divide < width) {
		ctx.moveTo(divide,0);
		ctx.lineTo(divide,200);
		divide += width/52;
	}
	ctx.stroke();

} else {
  // canvas-unsupported code here
}