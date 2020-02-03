// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file!')};
//Holly Wand with Unicorn Hair Core

$(() => {
    const $body = $('body');
    const $container = $('#container');
    console.log($container);

    const $h1 = $('<h1>')
        .text('Hogwarts');
    const $h2 = $('<h2>')
        .text('Evan');
    const $h3 = $('<h3>')
        .text('Gryffindor');
    const $h4 = $('<h4>')
        .addClass('cat')
        .text('Dill');




    $body.append($h1, $h2, $h3, $h4);

})
