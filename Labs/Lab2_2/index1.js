var express = require('express')
var app = express()

const database = require('./database')();
const api = require('./api');
const data = require('./data');


app.get('/api/v1/judge', api.getAllJudges);
app.post('/api/v1/judge', api.addJudge);

app.get('/api/v1/case',api.addCase);
app.get('/api/v1/case/:id',api.getACase);
app.post('/api/v1/case', api.getAllCases);

app.get('/api/v1/courtRoom', api.getAllCourtRooms);
app.post('/api/v1/courtRoom', api.addCourtRoom);

app.get('/api/v1/participant', api.getAllParticipants);
app.post('/api/v1/participant', api.addParticipant);

app.post('/api/v1/data',data.populate);

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})
