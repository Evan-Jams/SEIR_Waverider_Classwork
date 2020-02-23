// dependencies
const mongoose = require('mongoose')
// mongoose.Promise = global.Promise
const db = mongoose.connection

const mongoURI = 'mongodb:localhost:27017/hotel'

const Hotel = require('./models/hotel.js')
const hotelSeed = require('./models/seed.js')

// Connection to mongo
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    },
    () => {
        console.log('Yo, you are connected homie');
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

// Hotel.create(hotelSeed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided hotel data')
// })

// Hotel.collection.drop()

// Hotel.countDocuments({}, (err, data) => {
//   if (err) console.log(err.message)
//   console.log(`There are ${data} hotels in this database`)
// })
