module.exports = function (sequelize, DataTypes) {
  var Services = sequelize.define("Services", {
    name: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      unique: true,
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

  return Services;
};
