// const randomInt = () => {
//     return Math.floor(Math.random() * data.length)
// }



$(() => {

    
    $.ajax({
        url: 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough='
        // Get information from certain borough, based on a button choice
    }).then((data) => {
        // then with the data, get a specific amount of incident reports based on input
        // w/ default 10 incidents
        // then post those incidents to the div below the buttons based on which
        // then on click, display how the incident was handled

    },
    () => {
        console.log('this isnt working out');
    }
)});



//
