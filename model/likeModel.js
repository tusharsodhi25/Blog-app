const mongoose = require('mongoose');


const likeScehma = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Post", // reference to the post model
      },
      user:{
          type:String,
          required:true,
      },
})

module.exports = mongoose.model("Like",likeScehma);




// const mongoose = require('mongoose');



// const postSchema = new mongoose.Schema({

//     title:{
//         type:String,
//         required:true,
//     },

//     body:{
//        type:String,
//        required:true,
//     },

//     likes:[{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"Like"

        
//     }],
//     comments: [{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"Comment"
//     }]

// })








// module.exports = mongoose.model('Post',postSchema);