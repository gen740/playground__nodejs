const io = require('socket.io-client');
const http = require('http')

async function postRequest(path, msg, callback, errorCallback) {
    try {
        let postData = msg
        let postDataStr = JSON.stringify(postData)
        let req = http.request({
            host: 'localhost',
            port: 3000,
            path: path,
            headers: {
                "Content-Type": "application/json",
                "Content-Length": Buffer.byteLength(postDataStr)
            },
            method: 'POST',
        }, (res) => {
            res.setEncoding('utf8');
            res.on('data', (data) => {
                callback(JSON.parse(data))
                console.log(JSON.parse(data))
            });
            res.on('end', () => {
                console.log('No more data in esponse.');
            });
        })
        req.write(JSON.stringify(msg))
        req.end()
    } catch (err) {
        errorCallback(err)
    }
}

async function main() {
    try {
        postRequest('/', { name: 'test' }, (data) => { console.log(data) }, (err) => console.log(err))
    } catch (err) {
        console.log(err)
    }
}

main()
