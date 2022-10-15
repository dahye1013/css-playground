export const drawCircle = (
  context,
  coordinate = { x: 0, y: 0 },
  option = { size: 5, color: 'black' },
) => {
  context.beginPath();
  context.arc(coordinate.x, coordinate.y, option.size, 0, Math.PI * 2);
  context.fillStyle = option.color;
  context.fill();
};

export const drawLine = (
  context,
  coordinate = { x1: 0, y1: 0, x2: 0, y2: 0 },
  option = { size: 10, color: 'black' },
) => {
  context.beginPath();
  context.moveTo(coordinate.x1, coordinate.y1);
  context.lineTo(coordinate.x2, coordinate.y2);
  context.strokeStyle = option.color;
  context.lineWidth = option.size;
  context.stroke();
  console.log(option);
};
