const BoardModel = require('../models/board.model');

module.exports.getAll = async (req, res) => {
    try {
        const boards = await BoardModel.findAll();
        res.status(200).json({ boards: boards });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error });
    }
};
