const Board = require('../models/board.model');

module.exports = {
  getAll(req, res) {
    Board.find({}, 'title', (err, boards) => {
      this._handleResponse(err, boards, res);
    });
  },
  getById(req, res) {
    Board.findOne({_id: req.params.boardId})
      .populate({
        path: 'lists',
        select: ['title'],
        model: 'List',
        populate: {
          path: 'cards',
          select: ['title', 'body'],
          model: 'Card',
        },
      })
      .exec((err, board) => {
        this._handleResponse(err, board, res);
      });
  },
  _handleResponse(err, data, res) {
    if (err) {
      res.status(400).end();
    } else {
      res.send(data);
    }
  },
};