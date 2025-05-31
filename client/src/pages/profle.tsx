import React, { useEffect, useState } from 'react';
import './profile.css';

function Profile() {
  const [points, setPoints] = useState<number>(0);

  useEffect(() => {
    const storedPoints = Number(localStorage.getItem("points")) || 0;
    setPoints(storedPoints);
  }, []);

  return (
    <div className="containerr">
      <div className='pointWrap'>
        <div className='imageNameWrapper'>
          <div className='profileImage'></div>
          <div className='name'>Natália Yuk</div>
        </div>
        <div className='pointss'>
          <div>Points:</div>
          <div>{points}</div> {/* ← Aqui está o número dinâmico de pontos */}
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
  );
}

export default Profile;
