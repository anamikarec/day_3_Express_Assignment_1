const express=require('express');
const uuid=require('uuid');
const Book=require('./Book');
const router=express.Router();

router.get("/",(req,res)=>{
    res.send(Book);
})

router.get("/:bookid",(req,res)=>{
   const book = Book.find(book => {
       return (Number(book.id) === Number(req.params.bookid));
    });
   
    if(!book){
        res.status(400).send("Book not found");
    }
    res.status(200).json(book);
})

router.post("/",(req,res)=>{
    // * Create a new user
    try{
        const {author,book_name,pages,published_year}=req.body;
        if(!author || author=="") throw new Error('Author name is required');
        if(!book_name || book_name=="") throw new Error('Book name is required');
        if(!pages || pages=="") throw new Error("pages are required");
        if(!published_year || published_year=="") throw new Error('published_year is required');
        const book={
            id: uuid.v4(),
            book_name: book_name,
            author: author,
            pages: pages,
            published_year: published_year
        }
        Book.push(book);
        res.status(201).json(book);
    }
    catch(err){
      res.status(400).send(`Invalid request: ${err.toString()}`)
    }
})

module.exports = router;