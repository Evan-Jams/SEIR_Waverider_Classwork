// console.log($);
// console.log('hi');

// https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BRONX
// https://data.cityofnewyork.us/resource/erm2-nwe9.json

// $.ajax({
//     url: 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD',
//     success: (data) => {
//         console.log(data);
//     },
//     error: () => {
//         console.log('you done messed up');
//     }
// })

const randomInt = (limit) => {
    return Math.floor(Math.random() * limit)
}

$(() => {
    $.ajax({
        url: 'https://data.cityofnewyork.us/resource/erm2-nwe9.json'
    }).then((data) => {
        const $index = () => {

        }
        console.log(data[1].borough);
        console.log(data[1].agency);
        console.log(data[1].complaint_type);
        console.log(data[1].descriptor)
        console.log(data[99]);

    },
    () => {
        console.log('this isnt working out');
    }
)});
