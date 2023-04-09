import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {id,name,email,username}=friend;
    return (
        <div className='friend'>
            <h3>Name : {name}</h3>
            <p>Email : {email}</p>
            <p>UserName : <Link className='userName' to={`/friend/${id}`} >{username}</Link></p>
        </div>
    );
};

export default Friend;