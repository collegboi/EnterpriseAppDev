var express = require('express');
var router = express.Router();
var models = require('../models/index');

var api = require('../routes/api');

const data = require('../routes/data');

router.get('/api/v1/judge', api.getAllJudges);
router.post('/api/v1/judge', api.addJudge);
router.put('/api/v1/judge',api.updateJudge);
router.delete('/api/v1/judge',api.deleteJudge);

router.get('/api/v1/case',api.getAllCases);
router.get('/api/v1/case/:id',api.getACase);
router.post('/api/v1/case', api.addCase);
router.put('/api/v1/case',api.updateCase);
router.delete('/api/v1/case',api.deleteCase);

router.post('/case',api.getQCases);

router.get('/api/v1/courtRoom', api.getAllCourtRooms);
router.post('/api/v1/courtRoom', api.addCourtRoom);
router.put('/api/v1/courtRoom',api.updateCourtRoom);
router.delete('/api/v1/courtRoom',api.deleteCourtRoom);

router.get('/api/v1/participant', api.getAllParticipants);
router.post('/api/v1/participant', api.addParticipant);
router.put('/api/v1/participant',api.updateParticipant);
router.delete('/api/v1/participant',api.deleteParticipant);

router.post('/api/v1/data',data.populate);

module.exports = router;
