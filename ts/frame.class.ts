export class Frames {
	frame: number;
	score: number;	

constructor(frame: number) {
	this.frame = frame;
	this.score = Math.floor(Math.random() * 11);
	}
}
