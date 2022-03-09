const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('step3.html').pipe(res)
})

server.listen(process.env.PORT || 3010)

console.log('Running on port 3010');
