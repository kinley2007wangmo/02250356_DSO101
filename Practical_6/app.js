const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Practical 6: DockerHub Integration');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});