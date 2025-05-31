import React from 'react';
import './profile.css';

function Profile() {
    return(
        <>
        <div className="container">
            <div className='pointWrap'>
                <div className='imageNameWrapper'>
                    <div className='profileImage'></div>
                    <div className='name'>Natália Yuk</div>
                </div>
                <div className='points'>
                    <div>Points: </div>
                    <div>15</div>
                </div>
            </div>
            <div className='informations'>
                <div className='info'>Colaboração: 4</div>
                <div className='info'>Colaboração: 4</div>
                <div className='info'>Colaboração: 4</div>
                <div className='info'>Colaboração: 4</div>
                <div className='info'>Colaboração: 4</div>
                <div className='info'>Colaboração: 4</div>
                <div className='info'>Colaboração: 4</div>
                <div className='info'>Colaboração: 4</div>
            </div>
            
        </div>
        </>
    )
}

export default Profile;