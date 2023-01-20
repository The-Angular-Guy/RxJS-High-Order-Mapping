const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());

/* Use this to get random delay time: Math.floor(Math.random() * 10000) + 1 */
// simulate delayed response
server.use((req, res, next) => {
    setTimeout(() => next(), 1000);
});

server.get('/api/search/:searchTerm', async (req, res, next) => {
    res.send({
        searchTerm: req.params.searchTerm,
        results: Math.floor(Math.random() * 100) + 1,
    });
});

server.listen('3000', () => {
    console.log(`Server is listening on PORT 3000`);
});
