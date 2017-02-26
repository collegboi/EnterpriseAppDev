const database = require('../models/index');

module.exports.populate =function(request, response){

    database.CourtRoom.sync();
    database.Judge.sync();
    database.Participant.sync();
    database.Case.sync();

    var courtRoom1 = database.CourtRoom.build({
        number: '101'
    }).save();

    var courtRoom2 = database.CourtRoom.build({
        number: '102'
    }).save();

    var courtRoom2 = database.CourtRoom.build({
        number: '102'
    }).save();

    var judge1 = database.Judge.build({
        name: "John",
        room: 999,
        ext: "111"
    }).save();

    var judge2 = database.Judge.build({
        name: "Mary",
        room: 888,
        ext: "112"
    }).save();

    var judge3 = database.Judge.build({
        name: "James",
        room: 777,
        ext: "113"
    }).save();

    var participant1 = database.Participant.build({
        name: "Smith",
        address: "1 Line, Dublin",
         type: "claimant"
    }).save();

    var participant2 = database.Participant.build({
        name: "Tim",
        address: "2 Dumbow, Dublin",
         type: "respondent"
    }).save();

    var participant3 = database.Participant.build({
        name: "Andy",
        address: "55 Test, Dublin",
        type: "claimant"
    }).save();

    var case1 = database.Case.build({
        judge_id: 0,
        courtroom_id: 0,
        claimant_id: 0,
        respondent_id: 1,
        start_date: Date("2017-05-01"),
        duration: 1,
    }).save();

    var case2 = database.Case.build({
        judge_id: 1,
        courtroom_id: 1,
        claimant_id: 0,
        respondent_id: 1,
        start_date: Date("2017-05-02"),
        duration: 1
    }).save();

    response.send("Successfull");
}