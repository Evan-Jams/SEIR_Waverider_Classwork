// console.log('hello');


const randColorRGB = () => {
	const red = Math.floor( Math.random() * 256 );
	const green = Math.floor( Math.random() * 256 );
	const blue = Math.floor( Math.random() * 256 );
	return `rgb(${red}, ${green}, ${blue})`;
}


const generateSquares = (limit) => {
    for (let i = 1; i <= limit; i++) {
		console.log(i);
		const $square = $('<div>').addClass('square');
        $square.css('background-color', randColorRGB());
        $square.text(i);
		$('body').append($square);
	}
}



$(() => {
    generateSquares(1000);
    // const $square = $('<div>').addClass('square');
    // $('body').append($square);



    //This function adds an H2 to the DOM
    // const addH2 = () => {
    //     const $h2 = $('<h2>').text("Just getting started");
    //     $('body').append($h2);
    //     console.log('hi');
    // }
    //
    //
    // const addH1 = () => {
    //     const $h1 = $('<h1>im super cool</h1>');
    //     $('body').append($h1);
    //     console.log('Yo');
    // }


    // addH2();
    // addH1();

    // for (let i = 1; i <= 1000; i++) {
    //     console.log('square' + i);
    // }
});

// (() => {
//     console.log('I am an IIFE');
// })()
