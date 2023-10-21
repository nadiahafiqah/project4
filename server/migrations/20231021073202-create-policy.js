'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Policies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.STRING
      },
      policyName: {
        type: Sequelize.STRING
      },
      policyNo: {
        type: Sequelize.STRING
      },
      nextPayment: {
        type: Sequelize.DATE
      },
      commencement: {
        type: Sequelize.DATE
      },
      expiry: {
        type: Sequelize.DATE
      },
      premium: {
        type: Sequelize.INTEGER
      },
      lifeAssured: {
        type: Sequelize.STRING
      },
      coverage: {
        type: Sequelize.STRING
      },
      paymentPeriod: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Policies');
  }
};