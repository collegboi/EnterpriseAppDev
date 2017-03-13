// =======================
// get the packages we need ============
// =======================
var express     = require('express');
var app         = express();
var http, url, crypto, sharedSecret;
http = require("http");
url = require("url");
crypto = require("crypto");

// =======================
// configuration =========
// =======================
var port = process.env.PORT || 8080; 
sharedSecret = "super-secret";

  var retrievedSignature, parsedUrl, computedSignature;
 // Deal with CORS.
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.method === "OPTIONS") {
        res.setHeader("Access-Control-Allow-Headers", "X-signature");
        res.writeHead(204);
        res.end();
    } else {
        

     // Get signature.
        retrievedSignature = req.headers["x-signature"];
     // Recalculate signature.
        parsedUrl = url.parse(req.url);
        computedSignature = crypto.createHmac("sha256", sharedSecret).update(parsedUrl).digest("hex");
     // Compare signatures.
        if (computedSignature === retrievedSignature) {
            res.writeHead(200, {
                "Content-Type": "text/plain"
            });
            res.end("Hello World\n");
        } else {
            res.writeHead(403, {
                "Content-Type": "text/plain"
            });
            res.end("Get Out\n");
        }
    }

// =======================
// API ROUTES -------------------
// =======================

// get an instance of the router for api routes
var apiRoutes = express.Router(); 

// apiRoutes.use(function(req, res, next) {
  
//   var appKey = req.params.appkey;
//   console.log(appKey);

//   if (appKey) {
      
//       next();

//   } else {
//     // return an error
//     return res.status(403).send({ 
//         success: false, 
//         message: 'No app key provided.' 
//     });
//   }
// });

// route to return all users (GET http://localhost:8080/api/users)
apiRoutes.get('/:appkey/users', function(req, res) {

  User.find({}, function(err, users) {
    res.json(users);
  });
});   

// apply the routes to our application with the prefix /api/appkey
app.use('/api', apiRoutes);
// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);

