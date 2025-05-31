// src/pages/DaySelection.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Group4.svg"; 
import "./DaySelection.css"; 

export default function Login(): React.ReactElement {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/select-employee"); 
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={Logo} alt="FeedBingo Logo" className="login-logo" />

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="seu@exemplo.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}