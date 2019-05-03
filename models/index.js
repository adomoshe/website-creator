const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const basename = path.basename(module.filename);
const db = {};

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize("2GO031419", "postgres", "", {
    host: "192.168.1.250",
    port: "5432",
    dialect: "postgres"
  });
}

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// db.sequelize.query("SELECT * FROM tbl_items").then(([results, metadata]) => {
//   console.log(results)
// })
