import type React from "react"
import { useState } from "react"
import "./Bingo3x3.css"
import { useNavigate } from "react-router-dom"
import Back from "../assets/back.svg"


type BingoSquare = {
  id: string
  topic: string
  rating: number | null
}

function App() {
  const navigate = useNavigate()
  const [evaluation, setEvaluation] = useState<string>("")
  const [squares, setSquares] = useState<BingoSquare[]>([
    { id: "1", topic: "Comunicação", rating: null },
    { id: "2", topic: "Proatividade", rating: null },
    { id: "3", topic: "Relacionamento", rating: null },
    { id: "4", topic: "Técnica", rating: null },
    { id: "5", topic: "Adaptabilidade", rating: null },
    { id: "6", topic: "Criatividade", rating: null },
    { id: "7", topic: "Resolução de Problemas", rating: null },
    { id: "8", topic: "Valores da Empresa", rating: null },
  ])

  const [activeDrag, setActiveDrag] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [dragPosition, setDragPosition] = useState<{ x: number; y: number } | null>(null)
  
  const ratings = [1, 2, 3, 4, 5]

  const handleDragStart = (e: React.DragEvent, rating: number) => {
    setActiveDrag(rating)
    setIsDragging(true)

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

  const handleDrop = (e: React.DragEvent, squareId: string) => {
    e.preventDefault()
    if (activeDrag !== null) {
      setSquares(squares.map((square) => (square.id === squareId ? { ...square, rating: activeDrag } : square)))
    }
    setActiveDrag(null)
    setIsDragging(false)
    setDragPosition(null)
  }

  const handleTouchStart = (e: React.TouchEvent, rating: number) => {
    e.preventDefault()
    setActiveDrag(rating)
    setIsDragging(true)

    const touch = e.touches[0]
    setDragPosition({ x: touch.clientX, y: touch.clientY })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault()
    if (isDragging && activeDrag !== null) {
      const touch = e.touches[0]
      setDragPosition({ x: touch.clientX, y: touch.clientY })
    }
  }

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
   const handleSubmit = () => {
   const storedPoints = Number(localStorage.getItem("points")) || 0;
  const newPoints = storedPoints + 1;

  localStorage.setItem("points", newPoints.toString());

  console.log("Avaliação enviada:", evaluation);
  console.log("Notas:", squares);

  navigate('/end'); 
   }

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
      <img src={Back} alt="Voltar" className="back-icon" />
    </button>
    <h1 style= {{ fontSize: '1.8rem' }}>
      Cartela do Thiago
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
        <div className="rating-title">NOTAS DE AVALIAÇÃO</div>
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
          <label htmlFor="evaluation">💬 Feedback livre:</label>
          <input
            type="text"
            id="evaluation"
            value={evaluation}
            onChange={(e) => setEvaluation(e.target.value)}
            placeholder="Escreva aqui, sua avaliação é anônima"
          />
        </div>
        <button className="submit-button" onClick={handleSubmit}>
        <span className="button-icon">📤</span>
             Enviar
        </button>
      </div>

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