// dependencies
const mongoose = require('mongoose')
// mongoose.Promise = global.Promise
const db = mongoose.connection

const mongoURI = 'mongodb://localhost:27017/hotel'

const Hotel = require('./models/hotel.js')
const hotelSeed = require('./models/seed.js')

// Connection to mongo
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    },
    () => {
        console.log('You are connected homie');
})

// error & success
db.on('error', err =>
    console.log(err.message + ' mongo is not running')
)
db.on('connected', () =>
    console.log('mongo connected: ', mongoURI)
)
db.on('disconnected', () =>
    console.log('mongo disconnected')
)

setTimeout(() => {
    db.close()
}, 3000)

// Hotel.create(hotelSeed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided hotel data')
// })

// Hotel.collection.drop()

// Hotel.countDocuments({}, (err, data) => {
//   if (err) console.log(err.message)
//   console.log(`There are ${data} hotels in this database`)
// })

const myFirstHotel = {
    name: 'Morning Mimosa',
    location: 'North Carolina',
    rating: 5,
    vacancies: true,
    rooms: {
        roomNumber: 7,
        size: 'Queen Suite',
        price: 350,
        booked: false
    },
    tags: ['Beautiful', 'Getaway', 'Mimosas']
}
// Create My first hotel

// Hotel.create(myFirstHotel, (error, hotel) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(hotel);
//     }
//     db.close()
// })


// Find all the hotels, and logging the entire list

// Hotel.find((err, hotels) => {
//     console.log(hotels);
//     db.close()
// })


// Finding just the names of the hotels

// Hotel.find({}, 'name -_id', (err, hotels) => {
//     console.log(hotels);
//     db.close()
// })


// Finding just my hotel that I created

// Hotel.find({name: 'Morning Mimosa'}, (err, hotel) => {
//     console.log(hotel);
//     db.close()
// })


// Finding all the hotels with vacancies

// Hotel.find({vacancies: true}, (err, hotels) => {
//     console.log(hotels);
//     db.close()
// })


// Deleting just 'Hotelicopter'

// Hotel.findOneAndRemove({name: 'Hotelicopter'}, (err, hotel) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(hotel + ' This is the hotel that pranked you...Sucker');
//     }
        // db.close()
// })


// Removing Hilbert's Hotel

// Hotel.findOneAndRemove({name: "Hilbert's Hotel"}, (err, hotel) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(hotel + ' Sucks to suck');
//     }
//         db.close()
// })


// Deleting the hotel in the Rockies

// Hotel.findOneAndRemove({location: 'Colorado Rockies'}, (err, hotel) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(hotel + ' Had a great location...');
//     }
//         db.close()
// })


// Updating the Great Northern's rating

// Hotel.findOneAndUpdate(
//     {name: 'The Great Northern'},
//     {rating: 5},
//     {new: true},
//     (err, hotel) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log(hotel, 'Great Work, you ARE the Great Northern I guess!');
//         }
//             db.close()
//     })


// Motel Bambi no longer has vacancies

// Hotel.findOneAndUpdate(
//     {name: 'Motel Bambi'},
//     {vacancies: false},
//     {new: true},
//     (err, hotel) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log(hotel, 'Damn, I really wanted to stay here');
//         }
//         db.close()
//     }
// )


// Changing the rating of White Bay

// Hotel.findOneAndUpdate(
//     {location: 'White Bay, Oregon'},
//     {rating: 2},
//     {new: true},
//     (err, hotel) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log(hotel, 'Wow, just wow. Really slipping');
//         }
//         db.close()
//     }
// )
