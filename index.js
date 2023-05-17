const express = require('express');
const multer = require('multer');

var app = express();
var appMulter = multer();

var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './uploads')
    },
    fileName: (req, file, callBack) => {
        callBack(null,file.orginalname )
    }
});

var upload = multer({storage:storage}).single('myfile')
app.post('/', (req, res) => {
    upload(req, res, (error) => {
        if (error) {
            res.send('File Upload Fail')
        }
        else {
            res.send('File Upload Success')
        }
    })
});

app.listen(8000, () => {
    console.log('Server start success');
})