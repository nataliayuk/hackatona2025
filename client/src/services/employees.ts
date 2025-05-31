// src/services/employees.ts
import axios from 'axios';
import type { Employee } from '../types/Employee';

// Exemplo de dados mock
export async function fetchEmployees(): Promise<Employee[]> {
  try {
    const response = await axios.get('http://localhost:3000/user'); // Replace with your backend URL
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    return [];
  }
}
