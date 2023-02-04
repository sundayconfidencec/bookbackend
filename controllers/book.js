
const { validationResult } = require("express-validator");
const accountBookModal = require("../modals/account")
const bookModal = require("../modals/book");

//controllers
const saveBook = (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors)
        return res.json({message: errors.array()[0].msg});
    }
    const {title,article,author} = req.body;
    const myBook = new bookModal ({title,article,author});
    myBook.save().then(result=>{

        res.json({message: "book saved successfully", data: result});
    }
        
    ).catch(err=> console.log(err));
    }
    
    const allBook = (req,res) =>{
    // const booklist = bookModal.all();
    const {id} = req.params;
    if(id){
    bookModal.find({_id: id}).then(books => {
        res.json({data: books});
    }).catch(err => console.log(err));
}else{
    bookModal.find().then(books => {
        res.json({data: books});
    }).catch(err => console.log(err));
}
    }
    
    const updateBook = (req,res)=>{
        const {id:bookID} = req.params;
        bookModal.findByIdAndUpdate({_id:bookID}, req.body,{
            new: true,
            runValidators:true
        }).then(book => {
            if(book){
                res.status(200).json({book})
                // book.title = title;
                // book.article = article;
                // book.author = author;

                // book.save();
                // res.json({message: "update successful", data: book})
            }
            //res.json({message: "update failed"})
        })//.catch(err => console.log(err));

        // const {id,title,article,author} = req.body;
        // const updatedBook = bookModal.update({title,article,author});
        // res.json({message: "book updated successfully", data: updatedBook});
    }
    
    // const updateBankController = (req, res)=>{
    //     const {id:bankID}= req.params
    //     bankModal.findByIdAndUpdate({_id:bankID},req.body,{
    //         new:true,
    //         runValidators:true
    //     }).then(bank=>{

    //         if(bank){
    //             res.status(200).json({bank})
    //         }
    //     })
    
    const deleteBook = (req,res)=>{
    const {id} = req.params;
    bookModal.findByIdAndRemove(id).then(deletedBook => {
        if(deletedBook){
            accountBookModal.deleteMany({bookId: deleteBook._id}).then(result => {
                res.json({message: "book deleted", data: deletedBook});

            }).catch(err => console.log(err));
            return;
        }
        res.json({message: "book not found"});
    }).catch(err => console.log(err));
    }
   

module.exports={saveBook,allBook,updateBook,deleteBook};