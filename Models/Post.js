const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    text: {
        type: String,
        required: true
    },
    name:{
        type: String,
        require:true
    },
    avatar:{
        type: String
    },
    date: {
        type: Date,
        default: Date.now,
      },
});