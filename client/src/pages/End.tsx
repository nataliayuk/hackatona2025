import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function End() {
  const navigate = useNavigate();
  const [points, setPoints] = useState<number>(0);

  // Carrega os pontos do localStorage ao abrir a página
  useEffect(() => {
    const storedPoints = Number(localStorage.getItem("points")) || 0;
    setPoints(storedPoints);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: '32px',
        boxSizing: 'border-box',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color, #e53e3e)', marginBottom: '16px' }}>
        <span className="points">
          <span className="points-icon">⭐</span>
          {points} pontos
        </span>
        <br />
        Obrigado pelo feedback! 🥳
      </h1>

      <p style={{ fontSize: '1rem', marginBottom: '32px' }}>
        Sua avaliação foi enviada com sucesso.
      </p>

      <button
        onClick={() => navigate('/select-employee')}
        style={{
          background: 'rgb(112, 111, 122)',
          color: '#fff',
          border: 'none',
          padding: '12px 24px',
          borderRadius: 'var(--border-radius, 16px)',
          fontSize: '0.8rem',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-medium, 0 8px 25px rgba(0,0,0,0.1))',
          transition: 'var(--transition, all 0.3s cubic-bezier(0.4,0,0.2,1))',
        }}
      >
        Voltar ao início
      </button>
    </div>
  );
}
