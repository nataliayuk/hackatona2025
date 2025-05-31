"use client"

import type React from "react"
import { useState } from "react"
import "./Bingo3x3.css"

type BingoSquare = {
  id: string
  topic: string
  rating: number | null
}

type Person = {
  Avaliação: string
}

function App() {
  const [person, setPerson] = useState<Person>({ Avaliação: "" })
  const [squares, setSquares] = useState<BingoSquare[]>([
    { id: "1", topic: "Proatividade", rating: null },
    { id: "2", topic: "Competência", rating: null },
    { id: "3", topic: "Comunicação", rating: null },
    { id: "4", topic: "Trabalho em Equipe", rating: null },
    { id: "5", topic: "Organização", rating: null },
    { id: "6", topic: "Criatividade", rating: null },
    { id: "7", topic: "Pontualidade", rating: null },
    { id: "8", topic: "Resolução de Problemas", rating: null },
  ])

  const [activeDrag, setActiveDrag] = useState<number | null>(null)
  const ratings = [1, 2, 3, 4, 5]

  // ✅ Verifica se todos os quadrados têm nota
  const allRated = squares.every((square) => square.rating !== null)

  const handleDragStart = (rating: number) => {
    setActiveDrag(rating)
  }

  const handleDrop = (squareId: string) => {
    if (activeDrag !== null) {
      setSquares(squares.map((square) => (square.id === squareId ? { ...square, rating: activeDrag } : square)))
      setActiveDrag(null)
    }
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, Avaliação: e.target.value })
  }

  // ✅ Ação do botão
  const handleFinish = () => {
    alert(`Avaliação concluída!`)
  }

  return (
    <div className="app-container">

      <div className="header">
        <h1>Bingo do Lucas</h1>
        </div>
    
      <div className="bingo-board">
        {squares.map((square) => (
          <div
            key={square.id}
            className="bingo-square"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(square.id)}
          >
            <div className="topic">{square.topic}</div>
            {square.rating && <div className={`rating-display rating-${square.rating}`}>{square.rating}</div>}
          </div>
        ))}
      </div>

      <div className="rating-circles">
        {ratings.map((rating) => (
          <div
            key={rating}
            className={`rating-circle rating-${rating}`}
            draggable
            onDragStart={() => handleDragStart(rating)}
          >
            {rating}
          </div>
        ))}
      </div>
      
        <div className="name-input">
          <label>Feedback livre:</label>
          <input
            type="text"
            id="personName"
            onChange={handleNameChange}
            placeholder="Escreva aqui"
          />
        </div>
      
        <div className="finish-section">
          <button className="finish-button" onClick={handleFinish}>
            Enviar
          </button>
        </div>
    </div>
  )
}

export default App