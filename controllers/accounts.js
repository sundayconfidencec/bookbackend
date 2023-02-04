
const accountBookModal = require("../modals/account");
const { validationResult } = require("express-validator");

const createBookAccountController = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors)
        return res.json({message: errors.array()[0].msg});
    }
    const {bookTitle,bookArticle, bookAuthor, bookId} = req.body;
    const bookAccount = new accountBookModal({bookTitle, bookArticle, bookAuthor, bookId});

    bookAccount.save().then(result => {
        if(result){
            res.json({message: "book Account created", data: result})
        }else{
            res.json({message: "failed to create book account"})
        }
    })
}
const listBookAccountController = (req, res) => {
    accountBookModal.find().populate("bookId", "bookTitle bookArticle bookAuthor -_id").then(result => {
        res.json({data: result});
    }).catch(err => console.log(err));
}
module.exports={createBookAccountController,listBookAccountController};