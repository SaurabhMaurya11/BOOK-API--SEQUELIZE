const db =  require('../models')

//Create main  model
const Book = db.books
const Review = db.reviews


// 1 create book
const addBook = async (req,res)=>{
    let info = {

        title:req.body.title,
        price: req.body.price,
        pages: req.body.pages,
        description: req.body.description,
        published: req.body.published ? req.body.published : false

    }
    const book = await Book.create(info)
    res.status(200).send(book)
    console.log(book)
}

//2 get all Books

const getAllBooks = async (req,res)=>{
    let books = await Book.findAll({})
    res.status(200).send(books)
}

// 3 get single Book
const getOneBook = async(req,res)=>{
    let id = req.params.id
    let books = await Book.findOne({ where: {id: id}})
    res.status(200).send(books)
}

// 4 update Book
const updateBook = async(req,res)=>{
    let id = req.params.id
    let book = await Book.update(req.body,{where: {id: id}})
    res.status(200).send(book)
}

// 5 delete book by id
const deleteBook = async(req,res)=>{
    let id = req.params.id
    let book = await Book.destroy({where: {id: id}})
    res.status(200).send("Book is Deleted")
}

// 6 published Book
const getPublishedBook= async (req,res)=>{
    
    let id = req.params.id;
    const  books = await Book.findAll({where: {published: true}})
    res.status(200).send(books)
}

// 7 Connect one to many relation Book and Reviews
const getBookReviews = async(req,res)=>{
    let id = req.params.id;
    const data = await Book.findOne({
        include:[{
            model: Review,
            as: 'review'
        }],
        where: {id: id}
    })
    res.status(200).send(data)
} 


module.exports ={
    addBook,
    getAllBooks,
    getOneBook,
    updateBook,
    deleteBook,
    getPublishedBook,
    getBookReviews
}