const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema ({
    name: {
        type: String, 
        require: true,
        maxLength : 100
    },
    description: {
        type: String,
        require: true,
        maxLength : 500

    }
})
module.exports = mongoose.model('Task', TaskSchema)