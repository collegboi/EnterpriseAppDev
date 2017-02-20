var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://@localhost:5432/mydb');

const error = require('./error');
const api = module.exports;
// const courtRoom = module.exports;
// const judge = module.exports;
// const participant = module.exports;
// const cases = module.exports;


api.getAllCases=function(request,response){
    database.Case.findAll({})
        .then(function(contacts) {
        var data = {
            error: "false",
            data: contacts
        };
        response.send(data);
    });
}

api.addCase=function(request,response){
    if (!error.verifyRequiredCase(request)){
        response.send(422,error_messages);
        return;
    }
    Case.create({
        judge_id: request.query.judge_id,
        courtroom_id: request.query.courtroom_id,
        claimant_id: request.query.claimant_id,
        respondent_id: request.query.respondent_id,
        start_date: request.query.start_date,
        duration: request.query.duration
    }).then(function(contact) {
        var data = {
            error: "true",
            message: "New Case created successfully",
            data: contact
        };
        response.send(data);
    });
}

api.getAllCourtRooms=function(request,response){
    database.CourtRoom.findAll({})
        .then(function(contacts) {
        var data = {
            error: "false",
            data: contacts
        };
        response.send(data);
    });
}

api.addCourtRoom=function(request,response){
    if (!error.verifyRequiredCourtRoom(request)){
        response.send(422,error_messages);
        return;
    }
    CourtRoom.create({
        number: request.query.number
    }).then(function(contact) {
        var data = {
            error: "true",
            message: "New CourtRoom created successfully",
            data: contact
        };
        response.send(data);
    });
}

api.getAllParticipants=function(request,response){
    database.Participant.findAll({})
        .then(function(contacts) {
        var data = {
            error: "false",
            data: contacts
        };
        response.send(data);
    });
}

api.addParticipant=function(request,response){
    if (!error.verifyRequiredParticipant(request)){
        response.send(422,error_messages);
        return;
    }
    Participant.create({
        name: request.query.name,
        address: request.query.address,
        type: request.query.type,
    }).then(function(contact) {
        var data = {
            error: "true",
            message: "New Participant created successfully",
            data: contact
        };
        response.send(data);
    });
}

api.getAllJudges=function(request,response){
    database.Judge.findAll({})
        .then(function(contacts) {
        var data = {
            error: "false",
            data: contacts
        };
        response.send(data);
    });
}

api.addJudge=function(request,response){
    if (!error.verifyRequiredJudge(request)){
        response.send(422,error_messages);
        return;
    }

    Judge.create({
        name: request.query.name,
        room: request.query.room,
        ext: request.query.ext,
    }).then(function(contact) {
        var data = {
            error: "true",
            message: "New Judge created successfully",
            data: contact
        };
        response.send(data);
    });
}