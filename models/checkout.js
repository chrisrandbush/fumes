var bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
    var Checkout = sequelize.define("Checkout", {
      username: {
          type:DataTypes.STRING,
          allowNull: false
      },
      cardnumber: {
          type: DataTypes.STRING,
          allowNull: false
      },
      cardMonth: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      cardYear: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      cardSec: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });

    Checkout.addHook("beforeCreate", function (checkout) {
      checkout.cardnumber = bcrypt.hashSync(
        checkout.cardnumber,
        bcrypt.genSaltSync(10),
        null
      );
      checkout.cardSec = bcrypt.hashSync(
        checkout.cardSec,
        bcrypt.genSaltSync(10),
        null
      );
    });

  
    return Checkout;
  };
  