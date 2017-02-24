var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://@localhost:5432/tester');

var Judge = sequelize.define('Judge', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    room: Sequelize.NUMBER,
    ext: Sequelize.STRING
});

var CourtRoom = sequelize.define('CourtRoom', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    number: Sequelize.STRING
});

var Participant = sequelize.define('Participant', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    type: Sequelize.ENUM('claimant', 'respondent')  
});

var Case = sequelize.define('Case', {
    judge_id: Sequelize.NUMBER,
    courtroom_id: Sequelize.NUMBER,
    claimant_id: Sequelize.NUMBER,
    respondent_id: Sequelize.NUMBER,
    start_date: Sequelize.DATE,
    duratio: Sequelize. NUMBER,
    result: { 
        type: Sequelize.BOOLEAN, 
        allowNull: true
    },
});

var User = sequelize.define('User', {
   id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
});



sequelize.sync().then(function() {
  return User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
}).then(function(jane) {
  console.log(jane.get({
    plain: true
  }));
});

