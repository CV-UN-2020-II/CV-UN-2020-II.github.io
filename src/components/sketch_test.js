export default function Sketch( p5 ) {
	let img;

	p5.preload = () => {
		img = p5.createImg("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSN77EgizQUrUvCjQOJ9nVSaEgEDDuShjxUSA&usqp=CAU");
	}
	p5.setup = () => {
		p5.createCanvas(img.wdth , img.heigth);

	}
}