// src/services/profile.ts
export type CompetencyAverage = {
  topic: string;
  average: number; 
};

export type CommentItem = {
  id: string;
  text: string;   
  date: string;   
};

export type ProfileData = {
  username: string;
  competencies: CompetencyAverage[];
  comments: CommentItem[];
};
export function fetchProfileData(): Promise<ProfileData> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        username: localStorage.getItem("username") || "Lucas",
        competencies: [
          { topic: "Comunicação ", average: 4.2 },
          { topic: "Proatividade ", average: 3.8 },
          { topic: "Relacionamento ", average: 4.0 },
          { topic: "Técnica ", average: 4.5 },
          { topic: "Adaptabilidade ", average: 4.1 },
          { topic: "Criatividade ", average: 3.9 },
          { topic: "Resolução de Problemas ", average: 4.3 },
          { topic: "Valores da Empresa ", average: 4.6 },
        ],
        comments: [
          {
            id: "c1",
            text: "Ajudou muito na última sprint, excelente comunicação!",
            date: "2025-05-30T14:32:00Z",
          },
          {
            id: "c2",
            text: "Ótima proatividade ao lidar com o cliente.",
            date: "2025-05-29T09:15:00Z",
          },
          {
            id: "c3",
            text: "Mostrar mais clareza nos relatórios, mas a técnica é excelente.",
            date: "2025-05-28T17:45:00Z",
          },
        ],
      });
    }, 500);
  });
}