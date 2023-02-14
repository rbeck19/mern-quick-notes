

const Note = require("../../models/note")

async function create (req, res) {
    try {
        const note = req.body.note
        note.user = req.user._id
        await Note.create(req.body.note)
            .then((note) => {
                res.status(200).json({note: note})
            })
    } catch (error) {
        res.status(400).json(error)
    }
}

async function index (req,res) {
    try {
        Note.find()
            .then((notes) => {
                return notes.map((note) => note)
            })
            .then((notes) => res.status(200).json({notes: notes}))
    } catch (error) {
        res.status(400).json(error)
    }
}



module.exports = {
    create,
    index
}