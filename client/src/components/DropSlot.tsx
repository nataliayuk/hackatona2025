// src/components/DropSlot.tsx
import React, { useState } from 'react';

type Props = {
  label: string; // nome da competência (ex: "Comunicação")
  currentValue: number | null; // valor atribuído (1–5) ou null
  onDropValue: (val: number) => void;
};

export default function DropSlot({ label, currentValue, onDropValue }: Props) {
  const [isOver, setIsOver] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(true);
  };
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(false);
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(false);
    const data = e.dataTransfer.getData('text/plain');
    const num = parseInt(data, 10);
    if (!isNaN(num)) {
      onDropValue(num);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        flex: 1,
        aspectRatio: '1', // para garantir quadrado
        border: isOver ? '2px dashed #4caf50' : '2px solid #ccc',
        borderRadius: '8px',
        margin: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: currentValue != null ? '#e8f5e9' : '#fafafa',
      }}
    >
      <span style={{ marginBottom: '8px', textAlign: 'center' }}>{label}</span>
      {currentValue != null && (
        <span
          style={{
            backgroundColor: '#4caf50',
            color: '#fff',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          {currentValue}
        </span>
      )}
    </div>
  );
}