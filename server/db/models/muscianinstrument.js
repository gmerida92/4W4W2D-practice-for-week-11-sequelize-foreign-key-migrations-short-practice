'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MuscianInstrument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MuscianInstrument.init({
    instrumentId: DataTypes.INTEGER,
    musicianId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MuscianInstrument',
  });
  return MuscianInstrument;
};