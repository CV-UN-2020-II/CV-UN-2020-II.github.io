export default function Test( p5 ) {
    let input;
    let img;

    p5.setup=()=> {
    input = p5.createFileInput(p5.handleFile);
    input.position(0, 0);
    }

    p5.draw=()=> {
    p5.background(255);
    if (img) {
        p5.image(img, 0, 0, p5.width, p5.height);
    }
    }

    p5.handleFile=(file)=> {
    p5.print(file);
    if (file.type === 'image') {
        img = p5.createImg(file.data, '');
        img.hide();
    } else {
        img = null;
    }
    }
    
}