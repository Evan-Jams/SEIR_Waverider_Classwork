let quantityToBuy = 1
const minus = $('#minus').html('-')
const buyAmount = $('#buy-amount').html(quantityToBuy)
const plus = $('#plus').html('+')
const buyButton = $('#buy-button')

$(() => {

    minus.on('click', () => {
        if (quantityToBuy > 0) {
            quantityToBuy--
        } else {
            quantityToBuy = 0
        }

        buyAmount.html(quantityToBuy)
    })

    plus.on('click', () => {
        quantityToBuy+= 1
        buyAmount.html(quantityToBuy)
    })



})
