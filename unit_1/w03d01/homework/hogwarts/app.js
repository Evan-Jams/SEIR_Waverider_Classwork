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
    const $h4_2 = $('<h4>')
        .text('Holly Wand with Unicorn Hair Core')

    const $ul = $('<ul>').attr('storage', 'trunk');


    const $li_1 = $('<li>').text('Butter Beer');
    const $li_2 = $('<li>').text('Invisibility Cloak').addClass('secret');
    const $li_3 = $('<li>').text('Magic Map').addClass('secret');
    const $li_4 = $('<li>').text('Time Turner').addClass('secret');
    const $li_5 = $('<li>').text('Leash').addClass('cat');
    const $li_6 = $('<li>').text('Magic Map');

    $ul.append($li_1, $li_2, $li_3, $li_4, $li_5, $li_6);

//                         Skip This, Failed attempt                    //
//========================================================================//
// Used a for loop to add all the list items at once, but then couldn't access
// individual list items to add a class to them, don't know why that was, but
// I gave up on it
//======================================================================//

    // const $storageTrunk = $([
    //     'butter beer',
    //     'invisibility cloak',
    //     'magic map',
    //     'time turner',
    //     'leash',
    //     'Bertie Bott\'s Every Flavor [Jelly] Beans'
    // ]);

        // for (let i = 0; i < 6; i++) {
        //     if (i !== 0 && i <= 3) {
        //         $ul.eq(i).append($('<li>').text($storageTrunk[i])).addClass('secret')
        //     } else if (i = 4) {
        //         $ul.eq(i).append($('<li>').text($storageTrunk[i])).addClass('cat')
        //     } else {
        //         $ul.eq(i).append($('<li>').text($storageTrunk[i]))
        //     }
        // };
    // console.log($li);
    // console.log($storageTrunk);
    // console.log($ul);
    // console.log($body);
//===========================================================================//
//===========================================================================//


    $container.append($h1, $h2, $h3, $h4, $h4_2, $ul)
    // $body.append();

})
