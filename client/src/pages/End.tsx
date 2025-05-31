// src/pages/End.tsx
import { useNavigate } from 'react-router-dom';

export default function End() {
  const navigate = useNavigate();

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
        23 pontos
      </span>
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