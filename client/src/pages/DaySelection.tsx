// // PAGINA 1

// // src/pages/DaySelection.tsx
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './DaySelection.css';
// import logo from "../image/upscalemedia-transformed.png"; // Import the logo image
// import LinhaS from '../components/Linha';
// import Linha from '../image/n5M3kt01.svg';
// const days = [
//   { id: 'segunda-feira', label: 'Seg' },
//   { id: 'terça-feira', label: 'Ter' },
//   { id: 'quarta-feira', label: 'Qua' },
//   { id: 'quinta-feira', label: 'Qui' },
//   { id: 'sexta-feira', label: 'Sex' },
//   { id: 'sábado', label: 'Sáb ' },
//   { id: 'domingo', label: 'Dom' },

// ];

// export default function DaySelection() {
//   const navigate = useNavigate();

//   return (
//     <div className="day-container">
//         {/* <div>
//           <img src={logo} alt="" />
//         </div> */}
//       <h1>Feedback do dia:</h1>
//       <LinhaS />
//       <div className="day-path">
//         {days.map((d, idx) => (
//           <React.Fragment key={d.id}>
//             <div
//               className="day-circle"
//               onClick={() => navigate('/select-employee', { state: { dayId: d.id } })}
//             >
//               {d.label}
//             </div>
//             {}
//             {idx < days.length - 1 && <div className="day-line" />}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// }