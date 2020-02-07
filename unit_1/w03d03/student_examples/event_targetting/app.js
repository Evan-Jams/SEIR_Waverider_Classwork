// console.log('Oh hey, I remember something like this')


let handOfCards = [];

$(() => {
    const $card = $('.card')
    // console.log($card);
    $card.on('click', (event) => {
        $(event.currentTarget).toggleClass('card-back');
        playHand();
    })
})



const playHand = () => {
        console.log('adding to ', handOfCards);

        handOfCards.push
            ($(event.currentTarget).children().eq(1).text())

        console.log(handOfCards);

    if (handOfCards.length === 2) {
        checkHand()
    }
}

const checkHand = () => {
    console.log('okay, i will check your cards', handOfCards);

    if (handOfCards[0] === handOfCards[1]) {
        $('body').append(`<h2>It's a match!</h2>`)
    } else {
        $('body').append(`<h2>It's NOT a match!</h2>`)
    }
    handOfCards = [];
}
