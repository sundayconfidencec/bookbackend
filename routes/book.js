
const {body} = require("express-validator");
const express = require("express");
const router = express.Router();
const {saveBook,allBook,updateBook,deleteBook} = require("../controllers/book");
const bookModal = require("../modals/book");


router.post("/booklibrary",[
    body("title").trim().not().isEmpty().withMessage("title field  can't be empty").isAlpha(),
    body("article").trim().not().isEmpty().withMessage("article field can't be empty").isAlpha(),
    body("author").trim().not().isEmpty().withMessage("author field can't be empty").isAlpha(),
] ,saveBook);
router.get("/booklibrary/:id?", allBook);
router.put("/booklibrary/:id", updateBook);
router.delete("/booklibrary/:id", deleteBook);

module.exports = router;