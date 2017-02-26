'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Cases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      duration: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Cases');
  }
};

// judge_id: {
//         type: Sequelize.INTEGER
//       },
//       courtroom_id: {
//         type: Sequelize.INTEGER
//       },
//       claimant_id: {
//         type: Sequelize.INTEGER
//       },
//       respondent_id: {
//         type: Sequelize.INTEGER
//       },
//       start_date: {
//         type: Sequelize.DATE
//       },
//       duration: {
//         type: Sequelize.INTEGER
//       },
//       result: {
//         allowNull: true,
//         type: Sequelize.BOOLEAN,
//       },