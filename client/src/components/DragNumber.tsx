// src/components/DragNumber.tsx
import React from 'react';

type Props = {
  value: number; // 1 a 5
};

export default function DragNumber({ value }: Props) {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text/plain', String(value));
    e.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      style={{
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#ffca28',
        color: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '8px',
        fontSize: '18px',
        fontWeight: 'bold',
        cursor: 'grab',
        userSelect: 'none',
      }}
    >
      {value}
    </div>
  );
}