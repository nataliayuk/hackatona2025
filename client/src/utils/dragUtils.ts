// src/utils/dragUtils.ts
export function allowDrop(e: React.DragEvent) {
  e.preventDefault();
}

export function onDragStart(
  e: React.DragEvent,
  draggedValue: number | string
) {
  e.dataTransfer.setData('text/plain', String(draggedValue));
}

export function onDrop(
  e: React.DragEvent,
  onReceive: (receivedValue: number) => void
) {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  const num = parseInt(data, 10);
  if (!isNaN(num)) {
    onReceive(num);
  }
}