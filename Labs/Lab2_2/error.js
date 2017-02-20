const database = require('./database')();

module.exports.verifyRequiredJudge =function(request){
    var errors = true;

    if (request.query.name == "") {
        errors = false;
    }
    if (request.query.room == "") {
        errors = false;
    }
    if (request.query.ext == "") {
        errors = false;
    }

    if (errors) {
        error_messages = {
            error: "true",
            message : "query empty"
        };
        return false;
    }else{
        return true;
    }
}

module.exports.verifyRequiredCourtRoom =function(request){
    var errors = true;

    if (request.query.number == "" ) {
        errors = false;
    }

    if (errors) {
        error_messages = {
            error: "true",
            message : "query empty"
        };
        return false;
    }else{
        return true;
    }
}

module.exports.verifyRequiredParticipant =function(request){
    var errors = true;

    if (request.query.name == "" ) {
        errors = false;
    }
    if (request.query.address == "" ) {
        errors = false;
    }
    if (request.query.type == "" ) {
        errors = false;
    }

    if (errors) {
        error_messages = {
            error: "true",
            message : "query empty"
        };
        return false;
    }else{
        return true;
    }
}

module.exports.verifyRequiredCase =function(request){
    var errors = true;

    if (request.query.courtroom_id == "" ) {
        errors = false;
    }
    if (request.query.claimant_id == "" ) {
        errors = false;
    }
    if (request.query.respondent_id == "" ) {
        errors = false;
    }
    if (request.query.start_date == "" ) {
        errors = false;
    }
    if (request.query.duration == "" ) {
        errors = false;
    }

    database.Case.findAll({
                        where: {
                            courtroom_id: request.query.courtroom_id
                        }
    }).then(function(contacts) {
        if ( contacts.count > 0 ) {
            errors = false
        }
    });

    if (errors) {
        error_messages = {
            error: "true",
            message : "query empty"
        };
        return false;
    }else{
        return true;
    }
}