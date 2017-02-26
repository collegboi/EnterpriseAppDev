//var Sequelize = require('sequelize');
//var sequelize = new Sequelize('postgres://@localhost:5432/mydb');

const error = require('./error');
//const database = require('./database')();
var database = require('../models/index');
const api = module.exports;
// const courtRoom = module.exports;
// const judge = module.exports;
// const participant = module.exports;
// const cases = module.exports;

// ----------------------------------//
// ------ Cases ---------------------//
// ----------------------------------//

api.getAllCases=function(request,response){
    database.Case.findAll({})
        .then(function(cases) {
        var data = {
            error: "false",
            data: cases
        };
        response.send(data);
    });
};

api.getQCases=function(request,response){
    database.Case.findAll({
                where: {
                            courtroom_id: request.query.courtroom_id,
                            start_date : request.query.start_date
                        }      
    }).then(function(cases) {
       if(cases.count >0) {
            var data = {
            error: "true",
            data: cases};
            response.send(data);
        } else {
            var data = {
            error: "false",
            data: cases.length
        };
            response.send(data);
        }
    });
};


api.getACase=function(request,response){
    database.Case.findAll({
         where: {
             id: req.params.id
	    }
    })
        .then(function(cases) {
        var data = {
            error: "false",
            data: cases
        };
        response.send(data);
    });
};


api.addCase=function(request,response){
    if (!error.verifyRequiredCase(request)){
        response.send(422,error_messages);
        return;
    }
    database.Case.create({
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
        response.send(422,data);
    });
};

api.updateCase=function (request,response) {
    database.Case.find({
    where: {
      id: req.params.id
        }
    }).then(function (cases) {
	if(cases){ 
        cases.updateAttributes({
        judge_id: request.query.judge_id,
        courtroom_id: request.query.courtroom_id,
        claimant_id: request.query.claimant_id,
        respondent_id: request.query.respondent_id,
        start_date: request.query.start_date,
        duration: request.query.duration
      }).then(function(cases) {
        res.send(cases);
      });
    }
  });
};

api.deleteCase=function(request,response) {
    database.Case.destroy({
    where: {
      id: req.params.id
        }
    }).then(function(deleted) {
        var data = {
            message: "Case deleted sucesfully ",
            data: deleted
        };
        res.send(data);
    });
};

// ----------------------------------//
// ------ CourtRoom -----------------//
// ----------------------------------//


api.getACourtRoom=function(request,response){
    database.CourtRoom.findAll({
         where: {
             id: req.params.id
	    }
    }).then(function(courtRooms) {
        var data = {
            error: "false",
            data: courtRooms
        };
        response.send(data);
    });
};

api.getAllCourtRooms=function(request,response){
    database.CourtRoom.findAll({})
        .then(function(contacts) {
        var data = {
            error: "false",
            data: contacts
        };
        response.send(data);
    });
};

api.deleteCourtRoom=function(request,response) {
    database.CourtRoom.destroy({
    where: {
      id: req.params.id
        }
    }).then(function(deleted) {
        var data = {
            message: "CourtRoom deleted sucesfully ",
            data: deleted
        };
        res.send(data);
    });
};

api.addCourtRoom=function(request,response){
    if (!error.verifyRequiredCourtRoom(request)){
        response.send(422,error_messages);
        return;
    }
    database.CourtRoom.create({
        number: request.query.number
    }).then(function(contact) {
        var data = {
            error: "true",
            message: "New CourtRoom created successfully",
            data: contact
        };
        response.send(data);
    });
};

api.updateCourtRoom=function (request,response) {
    if (!error.verifyRequiredCourtRoom(request)){
        response.send(422,error_messages);
        return;
    }
    database.CourtRoom.find({
    where: {
      id: req.params.id
        }
    }).then(function (courtRooms) {
	if(courtRooms){ 
        courtRooms.updateAttributes({
        number: request.query.number
      }).then(function(courtRooms) {
        res.send(courtRooms);
      });
    }
  });
};

// ----------------------------------//
// ------ Participant ---------------//
// ----------------------------------//

api.getAllParticipants=function(request,response){
    database.Participant.findAll({})
        .then(function(contacts) {
        var data = {
            error: "false",
            data: contacts
        };
        response.send(data);
    });
};

api.addParticipant=function(request,response){
    if (!error.verifyRequiredParticipant(request)){
        response.send(422,error_messages);
        return;
    }
    database.Participant.create({
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
};

api.updateParticipant=function (request,response) {
    if (!error.verifyRequiredParticipant(request)){
        response.send(422,error_messages);
        return;
    }
    database.Participant.find({
    where: {
      id: req.params.id
        }
    }).then(function (participants) {
	if(participants){ 
        participants.updateAttributes({
            name: request.query.name,
            address: request.query.address,
            type: request.query.type,
      }).then(function(participants) {
        res.send(participants);
      });
    }
  });
};

api.deleteParticipant=function(request,response) {
    database.Participant.destroy({
    where: {
      id: req.params.id
        }
    }).then(function(deleted) {
        var data = {
            message: "Participant deleted sucesfully ",
            data: deleted
        };
        res.send(data);
    });
};



// ----------------------------------//
// ------ Judge ---------------------//
// ----------------------------------//

api.getAllJudges=function(request,response){
    database.Judge.findAll({})
        .then(function(contacts) {
        var data = {
            error: "false",
            data: contacts
        };
        response.send(data);
    });
};

api.addJudge=function(request,response){
    if (!error.verifyRequiredJudge(request)){
        response.send(422,error_messages);
        return;
    }

    database.Judge.create({
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
};

api.deleteJudge=function(request,response) {
    database.Judge.destroy({
    where: {
      id: req.params.id
        }
    }).then(function(deleted) {
        var data = {
            message: "Judge deleted sucesfully ",
            data: deleted
        };
        res.send(data);
    });
};

api.updateJudge=function (request,response) {
    if (!error.verifyRequiredJudge(request)){
        response.send(422,error_messages);
        return;
    }
    database.Judge.find({
    where: {
      id: req.params.id
        }
    }).then(function (judges) {
	if(judges){ 
        judges.updateAttributes({
            name: request.query.name,
            room: request.query.room,
            ext: request.query.ext,
      }).then(function(judges) {
        res.send(judges);
      });
    }
  });
};
