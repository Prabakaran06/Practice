const Post =({post})=>{
    return(
        <article className="post">
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">
                {(post.body).length<=25 ? post.body :`${(post.body).slice(0,25)}`}
                </p>
        </article>
    )
}

export default Post;




// import React from "react";
// import { useParams } from "react-router-dom";

// const Post =()=>{
//     const {id}=useParams()
//     return(
//         <div>post {id} </div>
//     )
// } 
// export default Post;