// if (typeof $ == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file properly!')};

// jQuery object ---- use only jquery or only vanilla js, the two do not mix.

// console.log($div);

// const $body = $('body');
// console.log($body);

// document on load / document on ready

// document on ready (scoped to the function)
$(() => {
    const $div = $('<div>');
    const $div2 = $('<div>')
        .addClass("vegetable");
    const $h3_2 = $('<h3>')
        .text("Starch");
    $div2
        .append($h3_2);

    $div
        .addClass("meat");

    const $h3 = $('<h3>')
        .text('Impossible meat');
    $div
        .append($h3);

    const $body = $('body');
    // console.log($body);
    $body
        .append($div);
    $body
        .prepend($div2);

    const $divs = $('div');
    // $divs.hide('slow');
    //
    // $divs.show('slow');
    const $img = $('<img>')
        .attr('src', 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D');
    $body
        .prepend($img);

    // console.log($divs);
    $divs
        .eq(2)
        .children()
        .text('Kohlrabi');

    const $anotherH3 = $('<h3>')
        .text('wine')
    $divs
        .eq(1)
        .empty()
        .append($anotherH3)

    $body.css('border', '1em solid black')

}); // closes the document on ready function
