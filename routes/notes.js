const express = require("express")
const router = express.Router()


const notesCTRL = require("../controllers/api/notes")

    //CREATE
router.post("/", notesCTRL.create)

    //INDEX
router.get("/", notesCTRL.index)

module.exports = router