const database = require('./database')();

module.exports.verifyRequiredJudge =function(request){
    var errors = false;

    if (request.query.name == null) {
        errors = true;
    }
    if (request.query.room == null) {
        errors = true;
    }
    if (request.query.ext == null) {
        errors = true;
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
    var errors = false;

    if (request.query.number == null ) {
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
    var errors = false;

    if (request.query.name == null) {
        errors = true;
    }
    if (request.query.address == null) {
        errors = true;
    }
    if (request.query.type == null) {
        errors = true;
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
    var errors = false;

    if (request.query.courtroom_id == null) {
        errors = true;
    }
    if (request.query.claimant_id == null) {
        errors = true;
    }
    if (request.query.respondent_id == null) {
        errors = true;
    }
    if (request.query.start_date == null) {
        errors = true;
    }
    if (request.query.duration == null) {
        errors = true;
    }

    database.Case.findAll({
                        where: {
                            courtroom_id: request.query.courtroom_id,
                            start_date : request.query.start_date
                        }
    }).then(function(cases) {
        if ( cases.length > 0 ) {
            errors = true;
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