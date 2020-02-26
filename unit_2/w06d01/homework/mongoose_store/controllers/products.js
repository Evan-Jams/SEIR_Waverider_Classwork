const router = require('express').Router();
const Product = require('../models/products.js')
const Seed = require('../models/seed.js')


// Presentaional Routes
// Index
router.get('/', (req, res) => {
    Product.find({}, (error, allProducts) => {
        if (error) {
            res.send('You done messed up bro')
        }
        // console.log(allProducts);
        res.render('index.ejs', {
            products: allProducts,
            tabTitle: 'Home'
        })
    })

})


// New
router.get('/new', (req, res) => {
    res.render('new.ejs', {
        tabTitle: 'New Skateboard'
    })
})

// Seed
router.get('/seed', (req, res) => {
    Product.create(Seed, (err, data) => {
        if(err){
            console.log(err);
        }
        console.log('added all your products');
        res.redirect('/products')
    })
})
// Show
router.get('/:id', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        res.render('show.ejs', {
            product: foundProduct,
            tabTitle: `${foundProduct.name} Skateboard`

        })
    })
})
// Create
router.post('/', (req, res) => {
    if (req.body.price <= 0 || req.body.qty <= 0){
        req.body.price = 0
        req.body.qty = 0
    }
    Product.create(req.body, (err, createdProduct) => {
        res.redirect('/products')
    })
})
// Edit
router.get('/:id/edit', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        res.render('edit.ejs', {
            product: foundProduct,
            tabTitle: 'Edit Skateboard'
        });
    });
});

// Update
router.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, (err, updatedProduct) => {
        if(err) {
            res.send(err);
        }
        res.redirect(`/products/${updatedProduct.id}`)
    });
});

// Destroy!
router.delete('/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, deletedProduct) => {
        res.redirect('/products')
    });
});


module.exports = router
