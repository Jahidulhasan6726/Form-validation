
const express = require('express');
const formidable = require('formidable');

var app = express();
app.use(express.static(__dirname + '/www'));

app.post('/process', (req, res) => {
    console.log(req);

    var form = new formidable.IncomingForm();
    form.parse(req, (err, flds) => {
        var data = {
            fname: flds.fname,
            email: flds.email,
            dob: flds.dob,
            gender: flds.gender
            /*            interest: flds.interest.join()*/
        };
        res.json(data);
        res.end('');
    });
});
app.listen(8080);
console.log("Server is running at port: 8080");
