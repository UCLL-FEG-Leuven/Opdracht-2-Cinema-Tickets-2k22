const EXPRESS = require('express');
const APP = EXPRESS();
const PORT = 2022;

APP.use('/movies', EXPRESS.static('../Client/Public/opdracht 2 cinema tickets'));

APP.listen(PORT, () => {
    console.log(`The server is running on: http://localhost:${PORT}`)
})