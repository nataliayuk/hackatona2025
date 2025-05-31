//PAGINA 2

// src/pages/EmployeeSelection.tsx
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchEmployees } from '../services/employees';
import type { Employee } from '../types/Employee';
type LocationState = {
  dayId: string;
};

export default function EmployeeSelection() {
  const navigate = useNavigate();
  const { state } = useLocation() as { state: LocationState };
  const dayId = state?.dayId || 'unknown';

  const [allEmployees, setAllEmployees] = useState<Employee[]>([]);
  const [filter, setFilter] = useState('');
  const [filteredList, setFilteredList] = useState<Employee[]>([]);

  useEffect(() => {
    fetchEmployees().then((emps) => {
      setAllEmployees(emps);
      setFilteredList(emps);
    });
  }, []);

  useEffect(() => {
    const lower = filter.toLowerCase();
    setFilteredList(
      allEmployees.filter((e) => e.name.toLowerCase().includes(lower))
    );
  }, [filter, allEmployees]);

  return (
    <div style={{ padding: '16px' }}>
      <h2>Selecione o Colaborador (Dia: {dayId})</h2>
      <input
        type="text"
        placeholder="Digite o nome..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{
          width: '100%',
          padding: '8px',
          margin: '12px 0',
          fontSize: '16px',
        }}
      />

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredList.map((emp) => (
          <li
            key={emp.id}
            style={{
              padding: '12px',
              marginBottom: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={() =>
              navigate('/bingo', { state: { dayId, employeeId: emp.id } })
            }
          >
            {emp.name}
          </li>
        ))}
      </ul>
    </div>
  );
}