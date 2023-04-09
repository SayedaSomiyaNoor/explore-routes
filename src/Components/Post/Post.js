import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const {id, title, body } = post;
    const navigate=useNavigate();
    const handleNavigate = () =>{
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <Link className='visitbtn' to={`/post/${id}`}>Visit : {id}</Link>
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleNavigate}>Show Details2</button>

        </div>
    );
};

export default Post;