console.log('hi');


const $container = $('<div>').addClass('container');
const $div = $('<div>').addClass('red-squares').css('background-color', 'red');
const $div2 = $('<div>').addClass('black-squares').css('background-color', 'black');
const $body = $('body')
const makingSquares = (limit) => {
    for(let i = 0; i < limit; i++) {
        if(i === 0 || i % 2 === 0) {
            console.log(i);
            $container.append($div);

        } else if(i % 2 !== 0) {
            console.log(i);
            $container.append($div2);
        }
    }
};

$(() => {
    $('body').append($container);
    makingSquares(64);
// Have no idea why this isn't creating 64 squares, loop seems to work fine. Moving on to try the triangles.



});
