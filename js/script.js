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
	var bkey = (width/52)/2
	while (bkey < width) {
		ctx.moveTo(bkey,0);
		ctx.lineTo(bkey,100);
		ctx.moveTo(bkey,100);
		ctx.lineTo(bkey+width/52,100);	
		bkey += width/52;
	}
	ctx.stroke();

} else {
  // canvas-unsupported code here
}