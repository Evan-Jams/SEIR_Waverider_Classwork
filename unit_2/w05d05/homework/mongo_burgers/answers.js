// create 5 burgers (at least 3 should be beef)
db.burger.insert({
... meat: 'beef',
... cheese: false,
... toppings: ['ketchup', 'onions', 'pickles']
... })

db.burger.insert({ meat: 'beef', cheese: true, toppings: ['ketchup', 'mayo', 'pickles', 'lettuce']})

db.burger.insert({ meat: 'beef', cheese: true, toppings: ['bbq', 'crispy onions', 'pickles', 'lettuce']})

db.burger.insert({ meat: 'turkey', cheese: false, toppings: ['cranberry mayo', 'crispy onions', 'stuffing', 'lettuce']})

db.burger.insert({ meat: 'impossible', cheese: true, toppings: ['chipotle mayo', 'ketchup', 'onions', 'pickles', 'lettuce']})


// find all the burgers
db.burger.find().pretty()

// show just the meat of each burger
db.burger.find({}, {meat: 1}).pretty()
// or
db.burger.find({}, {meat: 1, _id: 0}).pretty()

// show just the toppings of each burger
db.burger.find({}, {toppings: 1}).pretty()
// or
db.burger.find({}, {toppings: 1, _id: 0}).pretty()

// show everything but the cheese
db.burger.find({}, {cheese: 0}).pretty()


// find all the burgers with beef
db.burger.find({meat: 'beef'}).pretty()

// find all the burgers that are not beef
db.burger.find({meat: {$ne: 'beef'}}).pretty()

// find the first burger with cheese
db.burger.findOne({cheese: true}, {justOne: true})

// find one and update the first burger with cheese to have a property of 'double cheese'
db.burger.findOne({cheese: true}, {justOne: true})
//took id from this one
db.burger.update({_id: ObjectId("5e5054d824a10d7523715b49")}, {$set: {cheese: 'double cheese'}})

// find the burger you updated to have double cheese
db.burger.find({cheese: 'double cheese'}).pretty()

// find and update all the beef burgers to be 'veggie'


// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})


// drop the collection
//Expected Output
//true

// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }


//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database


//
// Change the name of the key cheese to 'pumpkinSpice'


// find all the burgers with ketchup (or another topping you used at least once)


// find all the burgers with pickles (or a topping you used more than once) and remove the pickles


// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger
