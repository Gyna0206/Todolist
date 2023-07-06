const express = require('express')

const controllerTask = require('../controllers/task')

const router = express.Router()

router.post('/create', controllerTask.create)
router.get('/', controllerTask.getTask)
router.get('/:id',controllerTask.getTasksByIds)
router.patch('/update/:id', controllerTask.updateTask)
router.delete('/delete/:id',controllerTask.deleteTask)
module.exports = router