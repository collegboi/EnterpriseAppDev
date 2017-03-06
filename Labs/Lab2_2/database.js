var Sequelize = require('sequelize');
var config = require('./config'); 

var sequelize = new Sequelize(config.database);

module.exports = () => {

     var User = sequelize.define('User', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        salt: Sequelize.STRING,
        admin: Boolean,
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
         updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    }, {
            freezeTableName: true,
    });

    var Judge = sequelize.define('Judge', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING,
        room: Sequelize.INTEGER,
        ext: Sequelize.STRING
    }, {
            freezeTableName: true,
    });

    var CourtRoom = sequelize.define('CourtRoom', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        number: Sequelize.STRING
    }, {
            freezeTableName: true,
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
    }, {
            freezeTableName: true,
        });

    var Case = sequelize.define('Case', {
        judge_id: Sequelize.INTEGER,
        courtroom_id: Sequelize.INTEGER,
        claimant_id: Sequelize.INTEGER,
        respondent_id: Sequelize.INTEGER,
        start_date: Sequelize.DATE,
        duration: Sequelize.INTEGER,
        result: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        },
    }, {
            freezeTableName: true,
        });

    return {
        Judge, CourtRoom, Participant, Case, User
    }
}