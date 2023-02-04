const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AccountBookSchema = new Schema({
    bookTitle: {
        type: String,
        required: true
    },
    bookArticle: {
        type: String,
        required: true
    },
    bookAuthor:{
        type: String,
        required: true
    },
    bookId: {
        type: Schema.Types.ObjectId,
        ref: "books",
        required: true
    }
});

const accountBookModal = mongoose.model("BookAccount", AccountBookSchema);
module.exports = accountBookModal;