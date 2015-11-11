document.addEventListener("keypress", function(e){
	console.log(e)
});
document.addEventListener("keydown", function(e){
	console.log(e)
});
document.addEventListener("keyup", function(e){
	console.log(e)
});

var midiNotes = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108]
var notes = ["A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A2","A#2","B2","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A3","A#3","B3","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A4","A#4","B4","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A5","A#5","B5","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A6","A#6","B6","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A7","A#7","B7","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A8","A#8","B8","C8"]

var Note = function (name) {
    this._name = name;
};

Note.prototype.color = function (color) {
	//get note key on canvas and change color
};


var canvas = document.getElementById('keyboard');

if (canvas.getContext){
  	var ctx = canvas.getContext('2d');
  	var width = canvas.width;
	var height = canvas.height;
	ctx.beginPath();
	var divide = width/52

	var count = 0;
	while (count<notes.length) {
		if (/#/.test(notes[count])) {
			ctx.fillRect(divide-(width/52)/2,0,width/52,100);
		}
		ctx.moveTo(divide,0);
		ctx.lineTo(divide,200);
		new Note(notes[count]);
		divide += width/52;
		count++
	}
	ctx.stroke();

} else {
  // canvas-unsupported code here
}