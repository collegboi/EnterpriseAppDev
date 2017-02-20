//const database = require('./database')();

module.exports.populate =function(){

    var courtRoom1 = yield database.CourtRoom.build({
        number: '101'
    }).save();

    var courtRoom2 = yield database.CourtRoom.build({
        number: '102'
    }).save();

    var courtRoom2 = yield database.CourtRoom.build({
        number: '102'
    }).save();

    var judge1 = yield database.Judge.build({
        name: "John",
        room: 999,
        ext: "111"
    }).save();

    var judge2 = yield database.Judge.build({
        name: "Mary",
        room: 888,
        ext: "112"
    }).save();

    var judge3 = yield database.Judge.build({
        name: "James",
        room: 777,
        ext: "113"
    }).save();

    var participant1 = yield database.Participant.build({
        name: "Smith",
        address: "1 Line, Dublin",
         type: "claimant"
    }).save();

    var participant2 = yield database.Participant.build({
        name: "Tim",
        address: "2 Dumbow, Dublin",
         type: "respondent"
    }).save();

    var participant3 = yield database.Participant.build({
        name: "Andy",
        address: "55 Test, Dublin",
        type: "claimant"
    }).save();

    var case1 = yield database.Case.build({
        judge_id: 0,
        courtroom_id: 0,
        claimant_id: 0,
        respondent_id: 1,
        start_date: Date("2017-05-01"),
        duration: 1,
    }).save();

    var case2 = yield database.Case.build({
        judge_id: 1,
        courtroom_id: 1,
        claimant_id: 0,
        respondent_id: 1,
        start_date: Date("2017-05-02"),
        duration: 1
    }).save();
}