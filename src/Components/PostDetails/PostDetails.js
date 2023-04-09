import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetails.css'

const PostDetails = () => {
    const post=useLoaderData();
    const{id,title,body,userId}=post;
    const navigate=useNavigate()
    const handleNavigate= () =>{
        navigate(`/friend/${userId}`)
    }
    return (
        <div className='postDetails'>
            <h2>Details about post : {id}</h2>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleNavigate}>Get the Author</button>
        </div>
    );
};

export default PostDetails;