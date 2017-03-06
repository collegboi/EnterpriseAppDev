var express = require('express')
var app = express()

var jwt    = require('jsonwebtoken');

var config = require('./config'); 

app.set('superSecret', config.secret); 

//const database = require('./database')();
const api = require('./api');
const data = require('./data');

app.post('/api/v1/user', api.addUser);
app.get('/api/v1/user', api.loginUser);
app.put('/api/v1/user', api.updateUser);

app.get('/api/v1/judge', api.getAllJudges);
app.post('/api/v1/judge', api.addJudge);
app.put('/api/v1/judge',api.updateJudge);
app.delete('/api/v1/judge',api.deleteJudge);

app.get('/api/v1/case',api.getAllCases);
app.get('/api/v1/case/:id',api.getACase);
app.post('/api/v1/case', api.addCase);
app.put('/api/v1/case',api.updateCase);
app.delete('/api/v1/case',api.deleteCase);

app.post('/case',api.getQCases);

app.get('/api/v1/courtRoom', api.getAllCourtRooms);
app.post('/api/v1/courtRoom', api.addCourtRoom);
app.put('/api/v1/courtRoom',api.updateCourtRoom);
app.delete('/api/v1/courtRoom',api.deleteCourtRoom);

app.get('/api/v1/participant', api.getAllParticipants);
app.post('/api/v1/participant', api.addParticipant);
app.put('/api/v1/participant',api.updateParticipant);
app.delete('/api/v1/participant',api.deleteParticipant);

app.post('/api/v1/data',data.populate);

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})
