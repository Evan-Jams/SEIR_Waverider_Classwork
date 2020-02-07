


$(()=>{

    // const $
    const changeColor = (event) => {
        $(event.target).addClass('pink');
    }

    const generateSquares = (num) => {
        for (let i = 0; i < num; i++) {
            const $squares = $('<div>').addClass('square')
            $('body').append($squares)
            // $squares.on('mouseover', () => {
            //     $squares.addClass('pink')
            // })

        }
        $('div').on('mouseover', changeColor);
    }


    generateSquares(1000)


});
