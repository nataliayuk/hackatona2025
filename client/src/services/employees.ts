// src/services/employees.ts
import type { Employee } from '../types/Employee';

// Exemplo de dados mock
const mockEmployees: Employee[] = [
  { id: '1', name: 'Ana Silva' },
  { id: '2', name: 'João Souza' },
  { id: '3', name: 'Carlos Pereira' },
  // …etc.
];

export function fetchEmployees(): Promise<Employee[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockEmployees);
    }, 300); // simula atraso de rede
  });
}