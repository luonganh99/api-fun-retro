const express = require('express');

const app = express();

app.use(express.json()); 
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.json({ message: 'Success!' });
});

app.listen(3000, () => {
    console.log('Server is running!');
});
