const query = require('./db');

module.exports = {
    findAll: () => query('SELECT * FROM BOARD'),
};
