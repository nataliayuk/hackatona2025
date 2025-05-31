// src/pages/Profile.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type {
  ProfileData,
  CompetencyAverage,
  CommentItem,
} from "../services/profile.ts";
import { fetchProfileData } from "../services/profile.ts";
import "./profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [points, setPoints] = useState<number>(0);

  useEffect(() => {
    const storedPoints = Number(localStorage.getItem("points")) || 0;
    setPoints(storedPoints);
  }, []);

  useEffect(() => {
    fetchProfileData().then((data) => {
      setProfile(data);
      setLoading(false);
    });
  }, []);

  if (loading || !profile) {
    return (
      <div className="app-container">
        <h2>Carregando perfil...</h2>
      </div>
    );
  }

  const { username, competencies, comments } = profile;

  return (
    <div className="app-container">
      <div className="header">
        <div className="header-content">
          <h1>Olá, {username}!</h1>
          <button
            className="start-button"
            onClick={() => navigate("/select-employee")}
          >
            Iniciar novo feedback
          </button>
  
        </div>
           <span className="pointss">
        <span className="points-icon">⭐</span>
         {points} pontos
         </span>
      </div>


      <section className="competencies-section">
        <h2>Média das Competências</h2>
        <div className="competencies-list">
          {competencies.map((c: CompetencyAverage) => (
            <div key={c.topic} className="competency-item">
              <span className="competency-topic">{c.topic}</span>
              <span className="competency-average">{c.average.toFixed(1)}</span>
            </div>
          ))}
        </div>
      </section>

  
      <section className="comments-section">
        <h2>Comentários Recebidos</h2>
        {comments.length === 0 ? (
          <p className="no-comments">Nenhum comentário recebido ainda.</p>
        ) : (
          <ul className="comments-list">
            {comments.map((c: CommentItem) => {
              const dateObj = new Date(c.date);
              const formattedDate = dateObj.toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              });
              const formattedTime = dateObj.toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
              });

              return (
                <li key={c.id} className="comment-item">
                  <div className="comment-header">
                    <span className="comment-date">
                      {formattedDate} às {formattedTime}
                    </span>
                  </div>
                  <p className="comment-text">{c.text}</p>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}