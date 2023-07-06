const Task = require('../models/task')

const controllerTask={
    create : async(req, res)=>{
        try {
            const name = req.body.name
            const description = req.body.description
            await Task.create({
                name: name,
                description : description
            })
            res.json({msg:'created'})
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },
    getTask : async(req,res)=>{
        try {
            const tasks = await Task.find({})
            res.json(tasks)
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },
    getTasksByIds : async(req,res) =>{
        try {
            const {id}= req.params
            const task= await Task.findById(id)
            res.json(task)
        } catch (error) {
            return res.status(500).json({msg:error.message})

            
        }
    },
    updateTask: async (req,res) =>{
            try {
                const {id} = req.params
                const name = req.body.name
                const description = req.body.description
                await Task.findByIdAndUpdate(id,
                    {
                    name:name,
                    description : description
                    })
                    res.json({msg:'update'})
            } catch (error) {
                return res.status(500).json({msg:error.message})                                    
            }
        },
    deleteTask: async (req,res) =>{
            try {
                const {id} = req.params
                await Task.findByIdAndDelete(id)
                res.json({msg:'Delete'})
            } catch (error) {
                return res.status(500).json({msg:error.message})                                         
            }
        }

}
module.exports = controllerTask
