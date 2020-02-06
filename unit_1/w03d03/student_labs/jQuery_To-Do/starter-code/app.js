const list = []



$(() => {
    $('form').on('submit', (event) => {
        event.preventDefault()
        const inputValue = $('#input-box').val()
        list.push({name: inputValue, declined: false})
        $(event.currentTarget).trigger('reset')
        console.log(inputValue);
        //attach item to the page
    })
})

const render = () => {
    
}
