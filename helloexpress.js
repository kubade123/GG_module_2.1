const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.get('/about', (req, res) => {
    res.send('Ini halaman about');
});

// Default Route
app.get('*', (req,res) => {
    res.send("Ini halaman default")
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})