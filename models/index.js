const { sequelize } = require('./connection');
const User = require('./user');
const Dashboard = require('./dashboard');
const History = require('./history');

const db = {};

db.sequelize = sequelize;

// model 생성
db.User = User;
db.Dashboard = Dashboard;
db.History = History;

// model init
User.init(sequelize);
Dashboard.init(sequelize);
History.init(sequelize);

// association(관계 생성)
History.associate(db);
User.associate(db);

module.exports = db;
