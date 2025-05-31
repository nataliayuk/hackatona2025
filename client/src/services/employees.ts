// src/services/employees.ts
import type { Employee } from '../types/Employee';

const mockEmployees: Employee[] = [
  { id: '1', name: 'Eduarda Leguisamo' },
  { id: '2', name: 'Lucas Jacchetti' },
  { id: '3', name: 'Natália Yuk' },
  { id: '4', name: 'Nicolas Batista' },
  { id: '5', name: 'Pedro Henrique' },
  { id: '6', name: 'Thiago Tarantino' },
];

export function fetchEmployees(): Promise<Employee[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockEmployees);
    }, 300); 
  });
}