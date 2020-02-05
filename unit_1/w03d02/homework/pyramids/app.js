// console.log('hi');
// const $pyramidContainer = $('<div').addClass('container')
const generatePyramid = (rows) => {
    for (let i = 1; i <= rows; i++) {
        const $tableRow = $('<tr>').addClass('row'+i)
        $('body').append($tableRow)

    for (let x = 1; x <= rows; x++) {
        const $triangle = $('<div>').addClass('triangle');
        // const $pyramidContainer = $('<div').addClass('container')
        // $pyramidContainer.append
        $('.row'+x).append($triangle)
    }
}
}

$(() => {
    generatePyramid(10);
})
