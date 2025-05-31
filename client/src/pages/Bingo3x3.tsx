
"use client"

import type React from "react"
import { useState } from "react"
import "./Bingo3x3.css"
import { useNavigate } from "react-router-dom"


type BingoSquare = {
  id: string
  topic: string
  rating: number | null
}

function App() {
  const navigate = useNavigate()
  const [points, setPoints] = useState<number>(0)
  const [evaluation, setEvaluation] = useState<string>("")
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
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [dragPosition, setDragPosition] = useState<{ x: number; y: number } | null>(null)
  
  const ratings = [1, 2, 3, 4, 5]

  // Handle drag start for rating circles (Desktop)
  const handleDragStart = (e: React.DragEvent, rating: number) => {
    setActiveDrag(rating)
    setIsDragging(true)

    // Hide default drag image
    const emptyImg = new Image()
    emptyImg.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    e.dataTransfer.setDragImage(emptyImg, 0, 0)
  }

  const handleDrag = (e: React.DragEvent) => {
    if (e.clientX !== 0 && e.clientY !== 0) {
      setDragPosition({ x: e.clientX, y: e.clientY })
    }
  }

  const handleDragEnd = () => {
    setActiveDrag(null)
    setIsDragging(false)
    setDragPosition(null)
  }

  // Handle dropping a rating on a square (Desktop)
  const handleDrop = (e: React.DragEvent, squareId: string) => {
    e.preventDefault()
    if (activeDrag !== null) {
      setSquares(squares.map((square) => (square.id === squareId ? { ...square, rating: activeDrag } : square)))
    }
    setActiveDrag(null)
    setIsDragging(false)
    setDragPosition(null)
  }

  // Handle touch start (Mobile)
  const handleTouchStart = (e: React.TouchEvent, rating: number) => {
    e.preventDefault()
    setActiveDrag(rating)
    setIsDragging(true)

    const touch = e.touches[0]
    setDragPosition({ x: touch.clientX, y: touch.clientY })
  }

  // Handle touch move (Mobile)
  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault()
    if (isDragging && activeDrag !== null) {
      const touch = e.touches[0]
      setDragPosition({ x: touch.clientX, y: touch.clientY })
    }
  }

  // Handle touch end (Mobile)
  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault()
    if (activeDrag !== null) {
      const touch = e.changedTouches[0]
      const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY)
      const square = elementBelow?.closest(".bingo-square")

      if (square) {
        const squareId = square.getAttribute("data-square-id")
        if (squareId) {
          setSquares(squares.map((square) => (square.id === squareId ? { ...square, rating: activeDrag } : square)))
        }
      }
    }
    setActiveDrag(null)
    setIsDragging(false)
    setDragPosition(null)
  }

  // Handle submit button
  const handleSubmit = () => {
    setPoints(points + 1)
    console.log("Avaliação enviada:", evaluation)
    console.log("Notas:", squares)
  }

  // Handle square click to remove rating
  const handleSquareClick = (squareId: string) => {
    if (!isDragging) {
      setSquares(squares.map((square) => (square.id === squareId ? { ...square, rating: null } : square)))
    }
  }

  return (
    <div className="app-container">
      <div className="header">
  <div className="header-content">
    <button
      className="back-button"
      onClick={() => navigate('/select-employee', { state: { dayId: 'example-id' } })}
      aria-label="Voltar"
    >
      ←
    </button>
    <h1>
      Bingo do Lucas
      <span className="points">
        <span className="points-icon">⭐</span>
        {points} pontos
      </span>
    </h1>
  </div>
</div>


      <div className="bingo-board">
        {squares.map((square) => (
          <div
            key={square.id}
            className={`bingo-square ${square.rating ? "has-rating" : ""} ${isDragging ? "drag-target" : ""}`}
            data-square-id={square.id}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, square.id)}
            onClick={() => handleSquareClick(square.id)}
          >
            <div className="topic">{square.topic}</div>
            {square.rating && <div className={`rating-display rating-${square.rating}`}>{square.rating}</div>}
            {!square.rating && <div className="drop-hint">Arraste aqui</div>}
          </div>
        ))}
      </div>

      <div className="rating-section">
        <div className="rating-title">Notas de Avaliação</div>
        <div className="rating-circles">
          {ratings.map((rating) => (
            <div
              key={rating}
              className={`rating-circle rating-${rating} ${isDragging && activeDrag === rating ? "dragging" : ""}`}
              draggable
              onDragStart={(e) => handleDragStart(e, rating)}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
              onTouchStart={(e) => handleTouchStart(e, rating)}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {rating}
            </div>
          ))}
        </div>
        <div className="rating-hint">Arraste as notas para os quadrados acima</div>
      </div>

      <div className="evaluation-section">
        <div className="evaluation-input">
          <label htmlFor="evaluation">💬 Avaliação:</label>
          <input
            type="text"
            id="evaluation"
            value={evaluation}
            onChange={(e) => setEvaluation(e.target.value)}
            placeholder="Escreva aqui seus comentários..."
          />
        </div>
        <button className="submit-button" onClick={handleSubmit}>
          <span className="button-icon">📤</span>
          Enviar Avaliação
        </button>
      </div>

      {/* Floating drag element */}
      {isDragging && dragPosition && activeDrag && (
        <div
          className={`floating-drag-element rating-${activeDrag}`}
          style={{
            left: dragPosition.x - 25,
            top: dragPosition.y - 25,
          }}
        >
          {activeDrag}
        </div>
      )}
    </div>
  )
}

export default App