export default function Sketch( p5 ) {
/*	let img;
	let filteredImg;
	let myFilter = 	[ [-1, 1, -1],
										[1, 1, 1],
										[-1, 1, -1]];

	p5.preload = () => {
		img = p5.loadImage("moto.jpg");
		img.crossOrigin = "";
		filteredImg = p5.createImg(img.width, img.heigth);
	}

	

	p5.setup = () => {
		p5.createCanvas(img.wdth * 2 , img.heigth);
		p5.noLoop();
	}

	p5.drawImages = () => {
		p5.image(img, img.width * 0, 0);
		p5.image(filteredImg, img.width * 1, 0, img.width, img.heigth);
	}

	p5.getIndex = (x, y, img) => {
		return (x + y * img.width) * 4;
	}

	p5.applyFilter = (x, y, img,mfilter) => {
		let sumR=0, sumG=0, sumB=0;
		for (let i = -1; i <= 1; i++) {
			for (let j = -1; j <= 1; j++) {
				let factor = mfilter[i + 1][j + 1];
				let px = x + i;
				let py = y + j;
				let pix = p5.getIndex(px, py, img);
				sumR += img.pixels[pix + 0] * factor; // r value
				sumG += img.pixels[pix + 1] * factor; // g value
				sumB += img.pixels[pix + 2] * factor; // b value
			}
		}
		return {
			r: sumR,
			g: sumG,
			b: sumB
		}
	}

	p5.convolution = () => {
		filteredImg.loadPixels();
		for (let i = 1; i < img.width - 1; i++) {
			for (let j = 1; j < img.heigth - 1; j++) {
				let pix = p5.getIndex(i, j, img);
				let rgb = p5.applyFilter(i, j, img, myFilter);
				filteredImg.pixels[pix + 0] = rgb.r; // max R
				filteredImg.pixels[pix + 1] = rgb.g; // max G 
				filteredImg.pixels[pix + 2] = rgb.b; // max B
				filteredImg.pixels[pix + 3] = 255;
			}
		}
		filteredImg.updatePixels();
	}

	p5.draw = () => {
		img.crossOrigin = "";
		p5.background(220);
		img.loadPixels();
		//p5.convolution();
		p5.drawImages();
	}
}
*/
	let img;
	let filteredImg;
	let myFilter = 	[ [-1, 1, -1],
					[1, 1, 1],
					[-1, 1, -1]];

	p5.preload = () => {
		img = p5.loadImage("https://upload.wikimedia.org/wikipedia/commons/0/0f/Papilio_Machaon_JPG1a.jpg");
		filteredImg = p5.loadImage("https://upload.wikimedia.org/wikipedia/commons/0/0f/Papilio_Machaon_JPG1a.jpg");
	}

	p5.setup = () => {
		p5.createCanvas(1000, 400);
	}

	p5.drawImages = () => {
		p5.image(img, 0, 0);
		p5.image(filteredImg, 500, 0, 500, 400);
	}

	p5.getIndex = (x, y, img) => {
		return (x + y * img.width) * 4;
	}

	p5.applyFilter = (x, y, img,mfilter) => {
		let sumR=0, sumG=0, sumB=0;
		for (let i = -1; i <= 1; i++) {
			for (let j = -1; j <= 1; j++) {
				let factor = mfilter[i + 1][j + 1];
				let px = x + i;
				let py = y + j;
				let pix = p5.getIndex(px, py, img);
				sumR += img.pixels[pix + 0] * factor; // r value
				sumG += img.pixels[pix + 1] * factor; // g value
				sumB += img.pixels[pix + 2] * factor; // b value
			}
		}
		return {
			r: sumR,
			g: sumG,
			b: sumB
		}
	}

	p5.convolution = () => {
		filteredImg.loadPixels();
		for (let i = 1; i < img.width - 1; i++) {
			for (let j = 1; j < img.height - 1; j++) {
				let pix = p5.getIndex(i, j, img);
				let rgb = p5.applyFilter(i, j, img, myFilter);
				filteredImg.pixels[pix + 0] = rgb.r; // max R
				filteredImg.pixels[pix + 1] = rgb.g; // max G 
				filteredImg.pixels[pix + 2] = rgb.b; // max B
				filteredImg.pixels[pix + 3] = 255;
			}
		}
		filteredImg.updatePixels();
	}

	p5.draw = () => {
		//p5.createCanvas(img.wdth * 2 , img.heigth);
		//p5.image(img, 0, 0, img.width, img.height);
		//p5.drawImages();
		p5.background(220);
		p5.image(img, 0, 0, 500, 400);
		img.loadPixels();
		p5.convolution();
		//p5.createCanvas();
		p5.drawImages()
	}


}