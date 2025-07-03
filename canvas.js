const canvas = document.getElementById('drawCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const brushSize = document.getElementById('brushSize');
const clearBtn = document.getElementById('clearBtn');
const saveBtn = document.getElementById('saveBtn');

let drawing = false;
let lastX = 0;
let lastY = 0;

function startDraw(e) {
  drawing = true;
  [lastX, lastY] = getXY(e);
}
function endDraw() {
  drawing = false;
}
function draw(e) {
  if (!drawing) return;
  const [x, y] = getXY(e);
  ctx.strokeStyle = colorPicker.value;
  ctx.lineWidth = brushSize.value;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();
  [lastX, lastY] = [x, y];
}
function getXY(e) {
  const rect = canvas.getBoundingClientRect();
  if (e.touches) {
    return [
      e.touches[0].clientX - rect.left,
      e.touches[0].clientY - rect.top
    ];
  }
  return [
    e.clientX - rect.left,
    e.clientY - rect.top
  ];
}

// Mouse events
canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mouseup', endDraw);
canvas.addEventListener('mouseout', endDraw);
canvas.addEventListener('mousemove', draw);

// Touch events for mobile
canvas.addEventListener('touchstart', startDraw);
canvas.addEventListener('touchend', endDraw);
canvas.addEventListener('touchcancel', endDraw);
canvas.addEventListener('touchmove', function(e) {
  draw(e);
  e.preventDefault();
}, { passive: false });

clearBtn.onclick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

saveBtn.onclick = () => {
  const link = document.createElement('a');
  link.download = 'drawing.png';
  link.href = canvas.toDataURL();
  link.click();
};