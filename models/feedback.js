module.exports = function (sequelize, DataTypes) {
    var Feedback = sequelize.define("Feedback", {
      experience: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      }
    });
  
    return Feedback;
  };
  