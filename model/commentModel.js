const mongoose = require('mongoose');


const commentScehema = new mongoose.Schema({
    post:{
      type:mongoose.Schema.Types.ObjectId,
      ref: "Post", // reference to the post model
    },
    user:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true
    }
})


module.exports  = mongoose.model("Comment",commentScehema);