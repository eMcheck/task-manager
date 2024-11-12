import mongoose from 'mongoose';

const taskShema = new mongoose.Schema({
    description: {
        type: String,
        require: true,
    },
    complited: {
        type: Boolean,
        require: false,
    },
    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
})

const Task = mongoose.model('Task', taskShema);


export default Task;
