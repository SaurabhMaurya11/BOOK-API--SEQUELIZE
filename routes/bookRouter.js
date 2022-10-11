const bookController = require('../controllers/bookController.js')
const reviewController = require('../controllers/reviewController')
// router

const router = require('express').Router()

//use Routers
router.post('/addBook', bookController.addBook)

router.get('/allBooks', bookController.getAllBooks)

router.get('/published', bookController.getPublishedBook)

// Review Url and Controller

router.get('/allReviews', reviewController.getAllReviews)
router.post('/addReview', reviewController.addReview)

//get Book reviews
router.get('/getBookReviews',bookController.getBookReviews)
router.get('/:id', bookController.getBookReviews)

// Books Router
router.get('/:id', bookController.getOneBook)

router.put('/:id', bookController.updateBook)

router.delete('/:id', bookController.deleteBook)

module.exports = router