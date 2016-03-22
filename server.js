var express = require("express");
var app = express();


var options = {
  
  tmpDir: __dirname + '/tmp', // tmp dir to upload files to 

  uploadDir: __dirname + '/public/files', // actual location of the file 

  uploadUrl: '/files/', // end point for delete route  

  maxPostSize: 11000000000, // 11 GB 

  minFileSize: 1,

  maxFileSize: 10000000000, // 10 GB 

  acceptFileTypes: /.+/i,

  inlineFileTypes: /\.(gif|jpe?g|png)/i,

  imageTypes:  /\.(gif|jpe?g|png)/i,

  copyImgAsThumb : true, // required 

  imageVersions :{
    maxWidth : 200,
    maxHeight : 200
  },

  accessControl: {
    allowOrigin: '*',
    allowMethods: 'OPTIONS, HEAD, GET, POST, PUT, DELETE',
    allowHeaders: 'Content-Type, Content-Range, Content-Disposition'
  },

  storage : {
    type : 'local' 
  }
};

var uploader = require('blueimp-file-upload-expressjs')(options);

app.post('/uploader', function(req, res){
  uploader.post(req, res, function (error,obj, redirect) {
      if(!error){
        res.send(JSON.stringify(obj)); 
      }
  });
});

app.listen(3001, function(){
  console.log("server start...");
});