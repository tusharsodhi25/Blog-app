// import model

const Comment = require("../model/commentModel");
const Post = require("../model/postModel");

// business logic

exports.createComment = async (req,res)=>{
    try{

        // fetch data from req body
        const{post,user,body} = req.body;


        // create comment object
         const comment = new Comment({
            post,
            user,
            body
         });

         // save the new object into DB
         const savedComment = await comment.save();

         // find the post by ID, add the new comment to its comment array

         const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments: savedComment._id}},{new:true})
                           .populate("comments") 
                           .exec();

        res.json({
            post : updatedPost
        })
    }                  
    catch(error){

        return res.status(500).json({
            error:"Error while creating a comment"
        })

    }
}