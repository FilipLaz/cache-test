let express = require('express');
let app = express();

var options = {
    etag: false,
    lastModified: false,
    setHeaders: function (res, path, stat) {
        Object.keys(res.req.query).forEach((key) => {
            res.set(key, res.req.query[key]);
        });
    }
};

app.use(express.static('files', options))

app.listen(3000, ()=> {
    console.log('http://localhost:3000/');
})