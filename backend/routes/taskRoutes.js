const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const { authenticateToken } = require('../middlewares/authMiddleware');

router.post('/', authenticateToken, taskController.createTask);
router.get('/', authenticateToken, taskController.getTasks);
router.get('/:id', authenticateToken, taskController.getTaskById);
router.put('/:id', authenticateToken, taskController.updateTask);
router.delete('/:id', authenticateToken, taskController.deleteTask);

module.exports = router;
