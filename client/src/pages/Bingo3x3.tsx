// src/pages/Bingo3x3.tsx
/*import { useLocation, useNavigate } from 'react-router-dom';
import DropSlot from '../components/DropSlot';
import DragNumber from '../components/DragNumber';
import type { BingoItem } from '../types/BingoItem';

type LocationState = {
  dayId: string;
  employeeId: string;
};

export default function Bingo3x3() {
  const navigate = useNavigate();
  const { state } = useLocation() as { state: LocationState };
  const { dayId, employeeId } = state || { dayId: 'unknown', employeeId: 'unknown' };

  // Mock de rótulos de competências
  const initialBingo: BingoItem[] = [
    { key: 'b1', label: 'Comunicação', value: null },
    { key: 'b2', label: 'Organização', value: null },
    { key: 'b3', label: 'Colaboração', value: null },
    { key: 'b4', label: 'Criatividade', value: null },
    { key: 'b5', label: 'Cumprimento de prazos', value: null },
    { key: 'b6', label: 'Empatia', value: null },
    { key: 'b7', label: 'Proatividade', value: null },
    { key: 'b8', label: 'Aprendizado rápido', value: null },
    { key: 'b9', label: 'Qualidade de código', value: null },
  ];

  const [bingoItems, setBingoItems] = useState<BingoItem[]>(initialBingo);

  // Função que atualiza o valor de um slot (ao receber drop)
  const handleDropValue = (key: string, val: number) => {
    setBingoItems((prev) =>
      prev.map((item) => (item.key === key ? { ...item, value: val } : item))
    );
  };

  // Checa se todos os itens já possuem valor para habilitar “Enviar”
  const allFilled = bingoItems.every((item) => item.value != null);

  const handleSubmit = () => {
    // Exemplo: só loga no console o resultado
    const result = {
      dayId,
      employeeId,
      ratings: bingoItems.map((i) => ({ key: i.key, value: i.value })),
    };
    console.log('Avaliação enviada:', result);
    navigate('/');
  };

  return (
    <div style={{ padding: '16px' }}>
      <h2>
        Avaliando Colaborador <i>{employeeId}</i> – Dia <i>{dayId}</i>
      </h2>

      {/* Grid 3x3 }
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          marginTop: '24px',
        }}
      >
        {bingoItems.map((item) => (
          <DropSlot
            key={item.key}
            label={item.label}
            currentValue={item.value ?? null}
            onDropValue={(val) => handleDropValue(item.key, val)}
          />
        ))}
      </div>

      {/* Números arrastáveis (1–5) }
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '32px',
          flexWrap: 'wrap',
        }}
      >
        {[1, 2, 3, 4, 5].map((n) => (
          <DragNumber key={n} value={n} />
        ))}
      </div>

      {/* Botão de enviar (desabilitado se nem todos preenchidos) }
      <button
        onClick={handleSubmit}
        disabled={!allFilled}
        style={{
          marginTop: '32px',
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: allFilled ? '#4caf50' : '#9e9e9e',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: allFilled ? 'pointer' : 'not-allowed',
        }}
      >
        Enviar Avaliação
      </button>
    </div>
  );
}
  */
