const express = require('express');
const router = express.Router();
const boardService = require('../services/board.service');

router.get('/boards', boardService.getAll.bind(boardService));
router.get('/boards/:boardId', boardService.getById.bind(boardService));
router.put('/boards/:boardId', boardService.update.bind(boardService));

module.exports = router;