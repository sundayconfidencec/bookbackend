

const express = require("express");
const router = express.Router();
const {createBookAccountController,listBookAccountController} = require("../controllers/accounts");
const {body} = require("express-validator");

router.post("/book",[
    body("bookTitle").trim().not().isEmpty().withMessage("Book title field cannot be empty").isAlpha(),
    body("bookArticle").trim().not().isEmpty().withMessage("Book article field cannot be empty").isAlpha(),
    body("bookAuthor").trim().not().isEmpty().withMessage("Book author field cannot be empty").isAlpha(),
], createBookAccountController);
router.get("/book", listBookAccountController);

module.exports = router;