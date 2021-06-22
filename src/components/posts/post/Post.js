import React from 'react'
import "./Post.css"

const Post = ({ post }) => {
    const imgPostContainer = {
        height: '20vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.2)),url(${post.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative'
    }

    return (
        <div className="postContainer">
            <div className="postHeader">
                <img src={post.owner.picture} alt="postdisplay" />
                <span className="postUsername">{post.owner.lastName}</span>
            </div>
            <div style={imgPostContainer}>
                <div className="postCalender">

                </div>
            </div>
            <div className="postContent">

            </div>
        </div>
    )
}
export default Post
