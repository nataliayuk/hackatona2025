// src/types/BingoItem.ts
export interface BingoItem {
  key: string;         // ex: 'c1', 'c2', … até 'c9'
  label: string;       // ex: 'Comunicação', 'Organização', …
  value?: number;      // número 1–5 que o usuário arrastou para este slot
}