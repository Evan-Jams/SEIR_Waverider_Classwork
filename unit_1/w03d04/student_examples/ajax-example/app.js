console.log($);

// const obj =
// {
//     url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen',
//     success: (data)=>{
//         console.log(data);
//     },
//     error: ()=>{
//         console.log('bad request');
//     }
// }

// $.ajax({
//     url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen',
//     success: (data) => {
//         console.log(data);
//     },
//     error: () => {
//         console.log('You messed up somewhere');
//     }
// })

// const promise = $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
// })
//
// promise.then(
//     (data) => {
//         console.log(data);
//     },
//     () => {
//         console.log('I did not run');
//     }
// )

// const promise = $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=Inception'
// })
//
// promise.then(
//     (data) => {
//         console.log(data);
//     },
//     () => {
//     console.log('didnt run dude');
//     }
// )


$(() => {
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=Inception'
    }).then((data) => {
        $('#title').html(data.Title);
        $('#year').html(data.Year);
        $('#rated').html(data.Poster);
    },
    () => {
        console.log('this isnt working out');
    }
);






})
