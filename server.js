const http = require('http');

const PORT = process.env.PORT

const logPref = function () {
    return "[" + process.pid + "] " + new Date() + " - "
}
 
const requestListener = function (req, res) {
    let rand = Math.floor(Math.random() * 10)
    if (rand % 2 == 0) {
        console.log(logPref() + `Success: ${rand}`)
    } else {
        console.error(logPref() + `Failure: ${rand}`)
    }

    res.writeHead(200);
    res.end(`${new Date} Yay! It works!\n`);
}

let server = http.createServer(requestListener);
server.listen(PORT, () => {
    console.log(logPref() + `Listening on port ${PORT}..`)
});