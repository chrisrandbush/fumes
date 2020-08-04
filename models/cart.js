module.exports = function (sequelize, DataTypes) {
    var Cart = sequelize.define("Cart", {
      name: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
      value: {
        type: DataTypes.INTEGER,
        required: true,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      }
    }, {
      timestamps: false
    });
  
    return Cart;
  };