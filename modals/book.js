const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const  BookSchema = new  mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    article:{
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    allBooks: [
        {
            bookId: {required: true, type: Schema.Types.ObjectId, ref: "BookAccount"}
        }
    ]
});

const bookModal = mongoose.model("books", BookSchema);
module.exports = bookModal;



// let database = require("./database");
//modals
// class bookModal {
//     constructor({title,article,author}){
//         this.title = title;
//         this.article = article;
//         this.author = author;
//     }
//     save(){
//         database.push(this);
//         return this;
//     }
//     static all(){
//         return database
//     }
//     static update(updatedBookInfo = {}){
//         database = database.map(book => {
//             if(book.title === updatedBookInfo.title){
//                 return {...book, ...updatedBookInfo};
//             }
//             return book;
//         })
//     }
//     static delete({title}){
//         let deletedBook = null;
//         database = database.filter(book =>{
//             if(book.title !== title){
//                 return true;
//             }
//             deletedBook = book;
//             return false;
//         });
//         return deletedBook;
//     }
// }
// module.exports = bookModal;