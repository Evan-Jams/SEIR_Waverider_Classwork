const list = []
const $newToDo = $('<ul>').addClass('to-do')
const $newToDone = $('<ul>').addClass('to-done')


$(() => {

    $('#to-do-list').append($newToDo)
    $('#completed').append($newToDone)
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
    $newToDo.empty()
    list.forEach((toDo) => {
        const $li = $('<li>').text(toDo.name).addClass('to-do-item');
        let $btn = $('<button>').text('Completed').appendTo($li)
        $newToDo.append($li);
        $li.on('click', (event) => {
            $(event.currentTarget).appendTo($newToDone).removeClass().addClass('done-item')
            $btn.text('Remove').appendTo($li)
            const index = $(event.currentTarget).index()
            list[index].declined = true
        })
        // if (toDo.declined) {
        //     $newToDone.remove()
        // }
    })
}
