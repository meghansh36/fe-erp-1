var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
//var basename  = path.basename(__filename);
var db        = {};
var CONFIG = require('../../../../../config/config.js');
const CLASSMETHODS = 'classMethods';
const ASSOCIATE = 'associate';

const sequelize = new Sequelize(CONFIG.db_name, CONFIG.db_user, CONFIG.db_password, {
  host: CONFIG.db_host,
  dialect: CONFIG.db_dialect,
  port: CONFIG.db_port,
  operatorsAliases: false,
  sync:{force:false},
  define:{
    timestamps: false
  }
});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js');
  })
  .forEach(file => {
      console.log(file);
    var model = sequelize['import'](path.join(__dirname, file));
    console.log(model);
    db[model.name] = model;
    //model.sync({force:false});
  });


Object.keys(db).forEach(modelName => {
    // console.log("CALLING ASSOCIATIONS",modelName);
    // console.log(db[modelName].associate);
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});



// Object.keys(db).forEach(function (modelName) {
//     if (CLASSMETHODS in db[modelName].options) {
//      if (ASSOCIATE in db[modelName].options[CLASSMETHODS]) {
//       db[modelName].options.classMethods.associate(db);
//     }}});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
