const list = []


$(() => {
    $('form').on('submit', (event) => {
        event.preventDefault()
        const inputValue = $('#input-box').val()
        list.push({name: inputValue, declined: false})
        $(event.currentTarget).trigger('reset')
        console.log(inputValue);
        //attach item to the page
        render();
    })
})

const render = () => {
    $('ul').empty()
    list.forEach((toDo) => {
        const $li = $('<li>').text(toDo.name).addClass('to-do-item');
        $('#to-do-list').append($li);
        $li.on('click', (event) => {
            $(event.currentTarget).appendTo($('#completed')).removeClass().addClass('done-item')
            const index = $(event.currentTarget).index()
            list[index].declined = true
        })
    })
}
