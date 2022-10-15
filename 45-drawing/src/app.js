import { drawCircle, drawLine } from './utils/drawing.js';
import { canvas, increaseBtn, decreaseBtn, sizeEl, colorEl, clearEl } from './components/dom.js';
const ctx = canvas.getContext('2d');

const canvasState = {
  isPress: false,
  x: undefined,
  y: undefined,
  color: 'black',
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
      drawCircle(ctx, { x, y });
    }
  },
};

const App = () => {
  canvas.addEventListener('mousedown', e => canvasState.mousedown(e));
  canvas.addEventListener('mouseup', canvasState.mouseup);
  canvas.addEventListener('mousemove', e => canvasState.mousemove(e));
};

App();
