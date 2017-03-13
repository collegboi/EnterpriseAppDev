var express = require('express')
var app = express()
var bodyParser  = require('body-parser');
var config = require('./config');
var jwt    = require('jsonwebtoken');
var stringify = require('json-stringify-safe');

var http, url, crypto, sharedSecret;
http = require("http");
url = require("url");
crypto = require("crypto");
sharedSecret = "super-secret";

const database = require('./database')();

app.set('superSecret', config.secret); 
app.set('appkey', config.appkey); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const api = require('./api');
const data = require('./data');

// app.use(require('apikey')(auth, 'my realm'));
 
// function auth (key, fn) {
//   if ('test' === key)
//     fn(null, { id: '1', name: 'John Dorian'})
//   else
//     fn(null, null)
// }

var apiRoutes = express.Router(); 

apiRoutes.post('/register', api.registerUser);
apiRoutes.post('/authenticate', api.authenticate);


// route middleware to verify a token
apiRoutes.use(function(req, res, next) {

  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
		  console.log(req.baseUrl);
		  // Get signature.
        retrievedSignature = req.headers["x-signature"];
     	// Recalculate signature.
        parsedUrl = url.parse(req.url);
        computedSignature = crypto.createHmac("sha256", sharedSecret).update(req.baseUrl).digest("hex");
     	// Compare signatures.
        if (computedSignature === retrievedSignature) {
            // res.writeHead(200, {
            //     "Content-Type": "text/plain"
            // });
            //req.decoded = decoded;    
        	next();
        } else {
            res.writeHead(403, {
                "Content-Type": "text/plain"
            });
            res.end("Get Out\n");
        }
      }
    });

  } else {
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
    
  }
});


apiRoutes.post('/user', api.addUser);
apiRoutes.get('/user', api.loginUser);
apiRoutes.put('/user', api.updateUser);

apiRoutes.get('/judge', api.getAllJudges);
apiRoutes.post('/judge', api.addJudge);
apiRoutes.put('/judge',api.updateJudge);
apiRoutes.delete('/judge',api.deleteJudge);

apiRoutes.get('/case',api.getAllCases);
apiRoutes.get('/case/:id',api.getACase);
apiRoutes.post('/case', api.addCase);
apiRoutes.put('/case',api.updateCase);
apiRoutes.delete('/case',api.deleteCase);

apiRoutes.post('/case',api.getQCases);

apiRoutes.get('/courtRoom', api.getAllCourtRooms);
apiRoutes.post('/courtRoom', api.addCourtRoom);
apiRoutes.put('/courtRoom',api.updateCourtRoom);
apiRoutes.delete('/courtRoom',api.deleteCourtRoom);

apiRoutes.get('/participant', api.getAllParticipants);
apiRoutes.post('/participant', api.addParticipant);
apiRoutes.put('/participant',api.updateParticipant);
apiRoutes.delete('/participant',api.deleteParticipant);

apiRoutes.post('/data',data.populate);

// apiRoutes.get('/', function (req,res) {
//   res.send('I can be reached only using an authorised api key.')
// })


// apply the routes to our application with the prefix /api
app.use('/api/v1', apiRoutes);



app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})
