import { drawCircle, drawLine } from './utils/drawing.js';
import { canvas, increaseBtn, decreaseBtn, sizeEl, colorEl, clearEl } from './components/dom.js';
const ctx = canvas.getContext('2d');

const canvasState = {
  isPress: false,
  x: undefined,
  y: undefined,
  color: '#000',
  size: 10,
  context: canvas.getContext('2d'),
  mousedown: e => {
    canvasState.isPress = true;
    canvasState.x = e.offsetX;
    canvasState.y = e.offsetY;
  },
  mouseup: () => {
    canvasState.isPress = false;
    canvasState.x = undefined;
    canvasState.y = undefined;
  },
  mousemove: e => {
    if (canvasState.isPress) {
      const x = e.offsetX;
      const y = e.offsetY;
      drawCircle(ctx, { x, y }, { size: canvasState.size, color: canvasState.color });
    }
  },
  updateColor: e => {
    canvasState.color = e.target.value;
  },
  increaseSize: e => {
    canvasState.size += 5;
    if (canvasState.size > 50) {
      canvasState.size = 50;
    }
    sizeEl.textContent = canvasState.size;
  },
  decreaseSize: e => {
    canvasState.size -= 5;
    if (canvasState.size <= 0) {
      canvasState.size = 5;
    }
    sizeEl.textContent = canvasState.size;
  },
  clearPad: () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  },
};

const App = () => {
  canvas.addEventListener('mousedown', e => canvasState.mousedown(e));
  canvas.addEventListener('mouseup', canvasState.mouseup);
  canvas.addEventListener('mousemove', e => canvasState.mousemove(e));
  colorEl.addEventListener('change', e => canvasState.updateColor(e));
  increaseBtn.addEventListener('click', e => canvasState.increaseSize(e));
  decreaseBtn.addEventListener('click', e => canvasState.decreaseSize(e));
  clearEl.addEventListener('click', canvasState.clearPad);
};

App();
