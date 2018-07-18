const http = require('http');

async function getRequest(url) {
  return new Promise((resolve,reject)=>{
    http.get(url, res => {
      let chunks = [];
      let size = 0;
      res.on('data', chunk => {
        chunks.push(chunk);
        size += chunk.length;
      });
      res.on('end', () => {
        let data = Buffer.concat(chunks, size);
        let base64Img = data.toString('base64');
        let baseUrl = 'data:image/jpeg;base64,' + base64Img;
        resolve(baseUrl);
      });
    });
  })
}

module.exports = getRequest;