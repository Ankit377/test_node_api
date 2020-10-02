//---------------------------------Author: Chirag Jangid Created On: August 13, 2020---------------------

var p = require('./functions');
var http = require('http');
var url = require('url');
var fs = require('fs');
var uc = require('upper-case');
var events = require('events');
var formidable = require('formidable');
var nodemailer = require('nodemailer');
var mongodb = require('mongodb');


//http module

// p.print("Server initiated!!");
// http.createServer(function (request, response)
// {
//     fs.readFile('sample.html', function (err,data)
//     {
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     response.write(data);
//     response.end();
//     })
// }).listen(8080);


//file system module


// fs.appendFile('sample.html', 'updated text', function (err)
// {
//     if (err) throw err;
//     console.log("Saved!!");
// })

// fs.writeFile('sample2.txt', 'this file is created by node file system', function (err)
// {
//     if (err) throw err;
//     console.log("Saved!!");
// })

// fs.writeFile('sample.html', 'text is replaced by node file system', function (err)
// {
//     if (err) throw err;
//     console.log("Replaced!!");
// })

// fs.unlink('sample2.txt', function (err)
// {
//     if (err) throw err;
//     console.log("Deleted!!");
// })

// fs.rename('sample.html', 'htmlfile.html', function (err)
// {
//     if (err) throw err;
//     console.log("Renamed!!");
// })

//url module

// var address = "http://localhost/default.htm?year=2020&month=august"
// var q = url.parse(address, true);
// console.log(q.host);
// console.log(q.path);
// var qdata = q.query;
// console.log(qdata.year);
// console.log(qdata.month);

//url + http + file system

// p.print("Server initiated");
// http.createServer(function (request, response)
// {
//     var q = url.parse(request.url, true);
//     var filename = "." + q.pathname;
//     fs.readFile(filename, function (err, data)
//     {
//         if (err)
//         {
//             response.writeHead(200, {"Content-Type": "text/html"});
//             response.write("404 not found!!");
//             response.end();
//         }
//         else
//         {
//             response.writeHead(200, {"Content-Type": "text/html"});
//             response.write(data);
//             response.end();
//         }
//     })
// }).listen(8080);

//upper-case module

// console.log(uc.upperCase("hello, world"));

//events

// var eventEmitter = new events.EventEmitter;

// var screamHandler = function ()
// {
//     console.log("I hear a scream");
// }

// eventEmitter.on('scream', screamHandler);

// eventEmitter.emit("scream");

//file upload

// p.print("Server initiated");

// http.createServer(function (request, response)
// {
//     if(request.url == "/fileupload")
//     {
//         var form = new formidable.IncomingForm();
//         form.parse(request, function (err, fields, files)
//         {
//             var oldpath = files.filetoupload.path;
//             var newpath = "/home/bugfree/Desktop/node.js/" + files.filetoupload.name;
//             fs.rename(oldpath, newpath, function(err)
//             {
//                 if (err) throw err;
//                 console.log("File uploaded and moved");
//             })
//         })
//     }
//     else
//     {
//         response.writeHead(200, {"Content-Type": "text/html"});
//         response.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//         response.write('<input type="file" name="filetoupload"><br>');
//         response.write('<input type="submit">');
//         response.write('</form>');
//         return response.end();
//     }
// }).listen(8080);

//nodemailer

// var transporter = nodemailer.createTransport(
//     {
//         service: 'gmail',
//         auth: 
//         {
//             user: 'chirag.jangid1702@gmail.com',
//             pass: 'thenewmailforcleanuse'
//         }
//     }
// );

// var mailOptions = {
//     from: 'chirag.jangid1702@gmail.com',
//     to: 'westartencare@gmail.com',
//     subject: 'sending mail from node.js',
//     html: '<h1>Mail sent using node.js'
// };

// transporter.sendMail(mailOptions, function (err, info)
// {
//     if (err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log("Email sent " + info.response);
//     }
// });



//------------------------------------database connection with mongo db follows now--------------------------

var mongoClient = mongodb.MongoClient;

var url = "mongodb://localhost:27017/mydb";

mongoClient.connect(url, function (err, db)
{
    if(err) throw err;
    console.log("Database connected");
    var dbo = db.db('mydb');
    // dbo.createCollection("another_collection", function(err, res)
    // {
    //     if (err) throw err;
    //     console.log("Collection created");
    // });
    var object = { name: "name", type: "type"};
    var findQuery = { name: "name"};
    var sortOrder = { name: -1};
    var deleteQuery = { name: "mane"};
    var updateQuery = { name: "CHIRAG"};
    // dbo.collection("another_collection").insertOne(object, function (err)
    // {
    //     if (err) throw err;
    //     console.log("Inserted!!");
    // });
    // dbo.collection("another_collection").findOne({}, function (err,res)
    // {
    //     if (err) throw err;
    //     console.log(res);
    // });
    // dbo.collection("another_collection").find({}, { projection: { id: 0, type: 0}}).toArray(function (err,result)
    // {
    //     if (err) throw err;
    //     console.log(result);
    // });
    // dbo.collection("another_collection").find(query).toArray(function (err, result)
    // {
    //     if (err) throw err;
    //     console.log(result);
    // });
    // db.close;
    // dbo.collection("another_collection").find({}).sort(sortOrder).toArray(function (err, result)
    // {
    //     if (err) throw err;
    //     console.log(result);
    // });
    // dbo.collection("another_collection").deleteOne(deleteQuery, function (err,result)
    // {
    //     if (err) throw err;
    //     console.log("Document deleted");
    // });
    // dbo.collection("collection").drop(function (err, isDropSuccessful)
    // {
    //     if (err) throw err;
    //     if (isDropSuccessful)
    //     {
    //         console.log("Collection dropped");
    //     }
    //     else
    //     {
    //         console.log("Error while dropping collection");
    //     }
    // })
    // dbo.collection("another_collection").update(updateQuery, { $set: {type: "human"}}, function (err, result)
    // {
    //     if (err) throw err;
    //     console.log("Updated");
    // })
    // dbo.collection("another_collection").find({}).limit(3).toArray(function (err, result)
    // {
    //     if (err) throw err;
    //     console.log(result);
    // })
});