export default function Sketch( p5 ) {
	let img;
	let w = 10;

	const matrix = [[ -1, -1, -1 ],
									[ -1,  9, -1 ],
									[ -1, -1, -1 ] ];

	p5.preload = () => {
		img = p5.loadImage("insect.jpg");
	}
	p5.setup = () => {
		p5.createCanvas(img.width / 10, img.height / 10);

		img.loadPixels();
		p5.pixelDensity(1);
	}

	p5.draw = () => {
		p5.background(img);

		const xstart = p5.constrain(p5.mouseX - w/2, 0, img.width);
		const ystart = p5.constrain(p5.mouseY - w/2, 0, img.height);
		const xend = p5.constrain(p5.mouseX + w/2, 0, img.width);
		const yend = p5.constrain(p5.mouseY + w/2, 0, img.height);
		const matrixsize = 3;

		p5.loadPixels();
		// Begin our loop for every pixel in the smaller image
		for (let x = xstart; x < xend; x++) {
				for (let y = ystart; y < yend; y++ ) {
				let c = p5.convolution(x, y, matrix, matrixsize, img);

				// retrieve the RGBA values from c and update pixels()
				let loc = (x + y*img.width) * 4;
				p5.pixels[loc] = p5.red(c);
				p5.pixels[loc + 1] = p5.green(c);
				p5.pixels[loc + 2] = p5.blue(c);
				p5.pixels[loc + 3] = p5.alpha(c);
				}
		}
		p5.updatePixels();
	}

	p5.convolution = (x, y, matrix, matrixsize, img) => {
		let rtotal = 0.0;
		let gtotal = 0.0;
		let btotal = 0.0;

		const offset = Math.floor(matrixsize / 2);

		for (let i = 0; i < matrixsize; i++){
				for (let j = 0; j < matrixsize; j++){

				// What pixel are we testing
				const xloc = (x + i - offset);
				const yloc = (y + j - offset);
				let loc = (xloc + img.width * yloc) * 4;

				// Make sure we haven't walked off our image, we could do better here
				loc = p5.constrain(loc, 0 , img.pixels.length - 1);

				// Calculate the convolution
				// retrieve RGB values
				rtotal += (img.pixels[loc]) * matrix[i][j];
				gtotal += (img.pixels[loc + 1]) * matrix[i][j];
				btotal += (img.pixels[loc + 2]) * matrix[i][j];
				}
		}
		// Make sure RGB is within range
		rtotal = p5.constrain(rtotal, 0, 255);
		gtotal = p5.constrain(gtotal, 0, 255);
		btotal = p5.constrain(btotal, 0, 255);

		// Return the resulting color
		return p5.color(rtotal, gtotal, btotal);
	}
}