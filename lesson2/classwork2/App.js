const fs = require('fs');
const path = require('path');

const readStream = fs.createReadStream(path.join(__dirname,'629ae425-e38d-4b5e-b8e5-d02512fabc4e.jpg'));

readStream.on('data',(chunk => {
    console.log(chunk);
}))