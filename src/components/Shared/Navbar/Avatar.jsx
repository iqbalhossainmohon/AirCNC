import React from 'react';
import AvatarImg from '../../../assets/images/placeholder.jpg'

const Avatar = () => {
    return (
        <img className='rounded-full' src={AvatarImg} alt="profile" height='30' width='30' />
    );
};

export default Avatar;