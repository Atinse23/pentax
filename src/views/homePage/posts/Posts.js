import React, { useEffect, useState } from 'react'
import Post from '../../../components/posts/post/Post'
import axios from 'axios';
import './Posts.css'
import PostButton from '../../../components/posts/createPost/CreatePostButton'
const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    const BASE_URL = 'https://dummyapi.io/data/api/post?limit=10';
    const APP_ID = '60bdd74e01eda2d8d6d2f157';

    const getPosts = async () => {
        axios.get(`${BASE_URL}`, { headers: { 'app-id': APP_ID } })
            .then(({ data }) => {
                setPosts(data.data)
                console.log(data.data)
            })
            .catch(console.error)

    }
    return (
        <div className="postsContainer">
            {
                posts.length > 0 ? posts.map(post => <Post post={post} key={post.id} />) : <h4>Loading</h4>
            }
            <PostButton />
        </div>
    )
}

export default Posts
