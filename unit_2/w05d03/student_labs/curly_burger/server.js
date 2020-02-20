const express = require('express')
const app = express()
const PORT = 3000

const orders = [
  { item: "Mad cURLy Fries", created_at: Date.now() },
  { item: "Swirly Milkshake", created_at: Date.now() },
  { item: "Burly Burger", created_at: Date.now() }
]

// Middleware
app.use(express.urlencoded({ extended: false }))



app.get('/orders', (req, res) => {
    console.log(orders);
    res.send(orders)
})

app.post('/orders', (req, res) => {
    if (!req.body.item){
        req.body.item = "NO DATA, You'll get an order of the Surly Soup"
    }
    console.log(`req.body is: ${req.body.item}`);
    // res.redirect('/orders')
    req.body.created_at = Date.now();
    orders.push(req.body)
    console.log('all orders data: ', orders);
    res.send(req.body)
})


app.listen(PORT, () => {
    console.log('Someone is listening...');
})
