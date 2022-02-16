const http = require('http');

const PORT = process.env.PORT
 
const requestListener = function (req, res) {
    let rand = Math.floor(Math.random() * 10)
    if (rand % 2 == 0) {
        console.log(`${new Date()} Success: ${rand}`)
    } else {
        console.error(`${new Date()} Failure: ${rand}`)
    }

    res.writeHead(200);
    res.end(`${new Date} Yay! It works!\n`);
}

let server = http.createServer(requestListener);
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}..`)
});