// console.log($);
// console.log('hi');


const randomInt = () => {
    return Math.floor(Math.random() * data.length)
}

$(() => {
    $.ajax({
        url: 'https://data.cityofnewyork.us/resource/erm2-nwe9.json'
    }).then((data) => {
        // I know this isn't even close to being correct. Trying to produce a number of complaints based on the number placed into the input, randomly drawn from the giant database.
        for (let i = 0; i < $('#input-box.input[input.val()]'); i++) {
            let i = randomInt()
            console.log(data[i].complaint_type);
        }

        // Get the borough info
        $('#'+ data[i].borough).html();
        // Get agency info
        // $('.incidents').html(data[i].agency);
        // Get complaint type
        // $('.incidents').html(data[i].complaint_type);
        // get decription of the complaint
        // $('.incidents').html(data[i].descriptor)
        // console.log(data[99]);

    },
    () => {
        console.log('this isnt working out');
    }
)});


//===========================================================================//
// Maybe just exhaustion or something, but I just could not put the pieces together
// tonight. Basically just stared at my screen for 5 hours last night and a few this morning
// trying to figure out how to go about getting the information and using it towards a page.
// Hence why my styling and functionality are severely lacking.
//===========================================================================//
