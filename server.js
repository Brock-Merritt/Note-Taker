const { application } = require('express');
const express = require('express');


//zookeeper as a rubric
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

//apiRoutes from zookeeper
app.use('where is /api technically?', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server is now on port ${PORT}!`);
});


// app.get('/', (req, res) =>{
//     res.sendFile(path.join(__dirname, './public/index.html'));
// });

// app.get('/animals', (req,res) => {
//     res.sendFile(path.join(__dirname, './public/animals.html'));
// });
