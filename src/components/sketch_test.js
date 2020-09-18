export default function Sketch( p5 ) {
	let img;
	let img2;
	let filteredImg;
	let myFilter = 	[ [-1, 1, -1],
										[1, 1, 1],
										[-1, 1, -1]];

	p5.preload = () => {
		img = p5.createImg("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSN77EgizQUrUvCjQOJ9nVSaEgEDDuShjxUSA&usqp=CAU");
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
		p5.background(220);
		img.loadPixels();
		p5.convolution();
		p5.drawImages();
	}
}