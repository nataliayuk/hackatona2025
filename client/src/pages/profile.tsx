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
                <div className='info'>Proatividade: 4.2</div>
                <div className='info'>Competência: 4.8</div>
                <div className='info'>Comunicação: 3.7</div>
                <div className='info'>Organização: 4.0</div>
                <div className='info'>Trabalho em equipe: 4.5</div>
                <div className='info'>Inovação: 2.3</div>
                <div className='info'>Pontualidade: 5.0</div>
                <div className='info'>Resolução de problemas: 3.9</div>
            </div>
            
        </div>
        </>
    )
}

export default Profile;