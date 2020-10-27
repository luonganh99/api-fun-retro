const boardRouter = require('./board.routes');

const routes = (app) => {
    app.use('/board', boardRouter);
    app.get('/', (req, res) => {
        res.send('Hello World');
    });
};

module.exports = routes;
