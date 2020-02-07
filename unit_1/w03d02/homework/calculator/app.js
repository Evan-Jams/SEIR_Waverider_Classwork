// console.log('connected');

let numberDisplay = []



$(() => {
    const $buttons = $('.button');
    // Logging the value of the button
    $buttons.on('click', (event) => {
        console.log($(event.currentTarget).attr('value'));
        numberDisplay.push($(event.currentTarget).attr('value'));
        console.log(numberDisplay);
    })
})
