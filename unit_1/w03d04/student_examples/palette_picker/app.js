// console.log('app.js loaded for palette picker');
// console.log($);

const $colorPalette = $('#color-palette')
// console.log($colorPalatte);
const $myPalette = $('#my-palette')
// console.log($myPalatte);
const $generate = $('#generate')
// console.log($generate);

const makePalette = () => {
    $colorPalette.empty()
    for (let i = 0; i < 150; i++) {
        const $square = $('<div>')
        $square.addClass('square')
        const red = Math.floor(Math.random() * 256)
        const green = Math.floor(Math.random() * 256)
        const blue = Math.floor(Math.random() * 256)
        const color = 'rgb(' + red + ',' + green + ',' + blue + ')'
        // console.log(color);
        $square.css('background-color', color)
        $square.on('click', addColor)
        $colorPalette.append($square)
    }
}

const addColor = () => {
    const color = $(event.currentTarget).css('background-color')
    const $square = $('<div>')
        .addClass('square')
        .css('background-color', color)
        .appendTo($myPalette)
    console.log(color);
}

$generate.on('click', makePalette)
makePalette()
