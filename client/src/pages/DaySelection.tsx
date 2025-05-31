// src/pages/DaySelection.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DaySelection.css'; // vamos criar um CSS leve para posicionar os círculos

const days = [
  { id: 'day1', label: 'Dia 1' },
  { id: 'day2', label: 'Dia 2' },
  { id: 'day3', label: 'Dia 3' },
  { id: 'day4', label: 'Dia 4' },
  { id: 'day5', label: 'Dia 5' },
];

export default function DaySelection() {
  const navigate = useNavigate();

  return (
    <div className="day-container">
      <h1>Selecione o Dia</h1>
      <div className="day-path">
        {days.map((d, idx) => (
          <React.Fragment key={d.id}>
            <div
              className="day-circle"
              onClick={() => navigate('/select-employee', { state: { dayId: d.id } })}
            >
              {d.label}
            </div>
            {/* Se não for o último, desenhe uma linha até o próximo */}
            {idx < days.length - 1 && <div className="day-line" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}