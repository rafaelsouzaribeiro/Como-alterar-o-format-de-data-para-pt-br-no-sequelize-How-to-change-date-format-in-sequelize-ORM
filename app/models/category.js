module.exports = function(sequelize, Sequelize) {
 
  var category = sequelize.define('category', {

      id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT.UNSIGNED
      },

      name: {
          type: Sequelize.STRING,
          notEmpty: true,
          allowNull: false
      },

      slug: {
          type: Sequelize.STRING,
          allowNull: false
      },
      
      dateCadastre: {
        type: Sequelize.DATE,
        allowNull: false
      },
      dateUpdate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      active:{
        type:   Sequelize.ENUM,
        values: ['1', '0'],
        defaultValue: "0"
      }
  },{tableName: 'category'});

  return category;

}