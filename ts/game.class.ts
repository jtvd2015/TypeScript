import {Frame} from "./frame.class";

export class Game {
	nbr: number;
	frames: Frame[] = [];
	total: number = 0;

	constructor(nbr: number) {
		this.nbr = nbr;
		for(let x = 0; x < 10; x++) {
			let f: Frame = new Frame(x);
			this.frames.push(f);
			this.total += f.score;
	}
}

print(): void {
	let msg = "";
	for(let frame of this.frames) {
		msg += `${frame.score},`;
	}
	msg += `score ${this.total}`;
	console.log(msg);
}
