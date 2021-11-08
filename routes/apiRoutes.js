const router = require('express').Router();
const path = require('path');
const notes  = require('../db/db.json')
const fs = require('fs');

function createNewNote(body,notesArray){
    const notes = body;
    notesArray.push(notes);
    fs.writeFileSync(
        path.join(__dirname,'../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return notes;
}

router.get('/notes', (req, res) => {
    let results = notes;
    // // if (req.query) {
    // //     results = filterByQuery(req.query, results);
    // //   }
    res.json(results);
    console.log(`${notes}`);
    
});

router.post('/notes', (req, res) => {
    let notes = req.body;
    console.log(notes)
    req.body = notes.toString();
    
    if(req.body){
        const note = createNewNote(req.body, notes);
        res.json(note);
    };

    console.log(`post is logged`);

});


// router.delete('/notes/:id', (req, res) => {
//     const result = findById(req.params.id, notes);
    
// });

module.exports = router;