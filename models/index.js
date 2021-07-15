'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const User = require('./user')
const Server = require('./servers')
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


//디비쓸거 파일 여기에 추가

db.User = User;
User.init(sequelize);
db.Server = Server;
Server.init(sequelize);


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
