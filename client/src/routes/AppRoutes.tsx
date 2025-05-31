// src/routes/AppRoutes.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DaySelection from '../pages/DaySelection';
import EmployeeSelection from '../pages/EmployeeSelection';
import Bingo3x3 from '../pages/Bingo3x3';
import End from '../pages/End';


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DaySelection />} />
        <Route path="/select-employee" element={<EmployeeSelection />} />
        <Route path="/bingo" element={<Bingo3x3 />} />
        <Route path="/end" element={<End />} />

      </Routes>
    </BrowserRouter>
  );
}