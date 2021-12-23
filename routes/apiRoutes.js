const router = require('express').Router();
const path = require('path');
const notes  = require('../db/db.json');
const fs = require('fs');
const uuidv1 = require('uuid');
// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

function createNewNote(body,notesArray){
    const notes = body
    notesArray.push(notes);
    fs.writeFileSync(
        path.join(__dirname,'../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return notes;
}

router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
    console.log(`${notes}`);
    
});

router.post('/notes', (req, res) => {
    const {title, text} = req.body;
    console.log(notes)
    req.body = notes.toString();
    
    if(req.body){
        const newNote = { title, text, id:uuidv1()};

        createNewNote(newNote, '../db/db.json');
        res.json(newNote);

    } else {
        res.error('error in /notes');
    }

    console.log(`post is logged`);
});


// router.delete('/notes/:id', (req, res) => {
//     const result = findById(req.params.id, notes);
    
// });

module.exports = router;