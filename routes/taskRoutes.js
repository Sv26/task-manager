const express = require('express');
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', auth, createTask);
router.get('/', auth, getTasks);
router.put('/:taskId', auth, updateTask);
router.delete('/:taskId', auth, deleteTask);

module.exports = router;

