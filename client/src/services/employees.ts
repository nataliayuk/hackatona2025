// src/services/employees.ts
import type { Employee } from '../types/Employee';

// Exemplo de dados mock
const mockEmployees: Employee[] = [
  { id: '1', name: 'Ana Silva' },
  { id: '2', name: 'João Souza' },
  { id: '3', name: 'Maria Oliveira' },
  { id: '4', name: 'Carlos Pereira' },
  { id: '5', name: 'Fernanda Costa' },
  { id: '6', name: 'Roberto Lima' },
  { id: '7', name: 'Patrícia Rocha' },
  { id: '8', name: 'Lucas Almeida' },
  { id: '9', name: 'Juliana Santos' },
  { id: '10', name: 'Eduardo Martins' },
];

export function fetchEmployees(): Promise<Employee[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockEmployees);
    }, 300); 
  });
}