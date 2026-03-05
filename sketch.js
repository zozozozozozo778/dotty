// ==========================
// BASE SETTINGS
// ==========================

let baseGridSpacing = 14;
let baseOuterDotSize = 24;
let baseInnerDotSize = 4;

let innerDotPositions = [];

let gridSpacing = baseGridSpacing;
let outerDotSize = baseOuterDotSize;
let innerDotSize = baseInnerDotSize;

let showGrid = true;
let showInnerDot = true;

let typedText = "";

// ==========================
// SETUP
// ==========================

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// ==========================
// DRAW LOOP
// ==========================

function draw() {
  background(bgColor);

  innerDotPositions = []; // reset every frame

  if (showGrid) {
    drawGrid();
  }

  drawText();

  drawInnerDots(); // SECOND PASS
}

// ==========================
// Dots render on top!
// ==========================

function drawInnerDots() {
  if (!showInnerDot) return;

  noStroke();
  fill(dotColor);

  for (let dot of innerDotPositions) {
    ellipse(dot.x, dot.y, innerDotSize, innerDotSize);
  }
}

// ==========================
// GRID
// ==========================

function drawGrid() {
  fill(dotColor);
  noStroke();

  let cols = floor(width / gridSpacing);
  let rows = floor(height / gridSpacing);

  let gridWidth = cols * gridSpacing;
  let gridHeight = rows * gridSpacing;

  let offsetX = (width - gridWidth) / 2;
  let offsetY = (height - gridHeight) / 2;

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      let x = offsetX + col * gridSpacing;
      let y = offsetY + row * gridSpacing;
      ellipse(x, y, innerDotSize, innerDotSize);
    }
  }
}

// ==========================
// DOT RENDERER
// ==========================

function drawDot(x, y) {
  noStroke();
  fill(letterColor);
  ellipse(x, y, outerDotSize, outerDotSize);
}

// ==========================
// GLYPH SYSTEM
// ==========================

const glyphs = {
  
// ==========================
// CAPITALS!
// ==========================
  "A": {
    width: 4,
    data: [
      "0110",
      "1001",
      "1001",
      "1111",
      "1001",
      "1001"
    ]
  },
  
   "B": {
    width: 4,
    data: [
      "1110",
      "1001",
      "1111",
      "1001",
      "1001",
      "1110"
    ]
  },
  
    "C": {
    width: 4,
    data: [
      "0111",
      "1000",
      "1000",
      "1000",
      "1000",
      "0111"
    ]
  },
  
    "D": {
    width: 4,
    data: [
      "1110",
      "1001",
      "1001",
      "1001",
      "1001",
      "1110"
    ]
  },
  
    "E": {
    width: 4,
    data: [
      "1111",
      "1000",
      "1110",
      "1000",
      "1000",
      "1111"
    ]
  },
  
    "F": {
    width: 4,
    data: [
      "1111",
      "1000",
      "1110",
      "1000",
      "1000",
      "1000"
    ]
  },
  
    "G": {
    width: 5,
    data: [
      "01110",
      "10001",
      "10000",
      "10011",
      "10001",
      "01110"
    ]
  },
  
    "H": {
    width: 5,
    data: [
      "10001",
      "10001",
      "11111",
      "10001",
      "10001",
      "10001"
    ]
  },
  
    "I": {
    width: 1,
    data: [
      "1",
      "1",
      "1",
      "1",
      "1",
      "1"
    ]
  },
  
    "J": {
    width: 4,
    data: [
      "0001",
      "0001",
      "0001",
      "1001",
      "1001",
      "0110"
    ]
  },
  
    "K": {
    width: 4,
    data: [
      "1001",
      "1001",
      "1110",
      "1001",
      "1001",
      "1001"
    ]
  },
  
    "L": {
    width: 4,
    data: [
      "1000",
      "1000",
      "1000",
      "1000",
      "1000",
      "1111"
    ]
  },
  
    "M": {
    width: 6,
    data: [
      "010010",
      "101101",
      "101101",
      "101101",
      "100001",
      "100001"
    ]
  },
  
    "N": {
    width: 5,
    data: [
      "10001",
      "11001",
      "10101",
      "10011",
      "10001",
      "10001"
    ]
  },
  
    "O": {
    width: 6,
    data: [
      "001100",
      "010010",
      "100001",
      "100001",
      "010010",
      "001100"
    ]
  },
  
    "P": {
    width: 4,
    data: [
      "1110",
      "1001",
      "1001",
      "1110",
      "1000",
      "1000"
    ]
  },
  
    "Q": {
    width: 6,
    data: [
      "001100",
      "010010",
      "100001",
      "100101",
      "010010",
      "001101"
    ]
  },
  
    "R": {
    width: 4,
    data: [
      "1110",
      "1001",
      "1001",
      "1110",
      "1001",
      "1001"
    ]
  },
  
    "S": {
    width: 5,
    data: [
      "00111",
      "01000",
      "01010",
      "01010",
      "00010",
      "11100"
    ]
  },
  
    "T": {
    width: 5,
    data: [
      "11111",
      "00100",
      "00100",
      "00100",
      "00100",
      "00100"
    ]
  },
  
    "U": {
    width: 5,
    data: [
      "10001",
      "10001",
      "10001",
      "10001",
      "10001",
      "01110"
    ]
  },
  
    "V": {
    width: 5,
    data: [
      "10001",
      "10001",
      "10001",
      "10001",
      "01010",
      "00100"
    ]
  },
  
    "W": {
    width: 6,
    data: [
      "100001",
      "100001",
      "101101",
      "101101",
      "101101",
      "010010"
    ]
  },
  
    "X": {
    width: 6,
    data: [
      "100001",
      "010010",
      "001100",
      "001100",
      "010010",
      "100001"
    ]
  },
  
    "Y": {
    width: 5,
    data: [
      "10001",
      "10001",
      "01010",
      "00100",
      "00100",
      "00100",
    ]
  },
  
    "Z": {
    width: 5,
    data: [
      "11111",
      "00010",
      "00100",
      "01000",
      "10000",
      "11111",
    ]
  },
  
// ==========================
// lowercase!
// ==========================
  
    "a": {
    width: 3,
    data: [
      "110",
      "001",
      "101",
      "011",
    ]
  },
  
    "b": {
    width: 4,
    data: [
      "1000",
      "1000",
      "1110",
      "1001",
      "1001",
      "1110",
    ]
  },
  
    "c": {
    width: 3,
    data: [
      "011",
      "100",
      "100",
      "011",
    ]
  },
  
    "d": {
    width: 4,
    data: [
      "0001",
      "0001",
      "0111",
      "1001",
      "1001",
      "0111",
    ]
  },
  
    "e": {
    width: 4,
    data: [
      "0110",
      "1001",
      "1000",
      "0110",
    ]
  },
  
    "f": {
    width: 3,
    data: [
      "010",
      "101",
      "100",
      "110",
      "100",
      "100",
    ]
  },
  
    "g": {
    width: 4,
    baseline: 3,
    data: [
      "0110",
      "1001",
      "1001",
      "0110",
      "0001",
      "0110",
    ]
  },
  
    "h": {
    width: 4,
    data: [
      "1000",
      "1000",
      "1110",
      "1001",
      "1001",
      "1001",
    ]
  },
  
    "i": {
    width: 1,
    data: [
      "1",
      "0",
      "1",
      "1",
      "1",
    ]
  },
  
    "j": {
    width: 3,
    baseline: 4,
    data: [
      "001",
      "000",
      "001",
      "001",
      "001",
      "101",
      "010",
    ]
  },
  
    "k": {
    width: 3,
    data: [
      "100",
      "101",
      "110",
      "101",
      "101",
    ]
  },
  
    "l": {
    width: 1,
    data: [
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
    ]
  },
   
    "m": {
    width: 5,
    data: [
      "11110",
      "10101",
      "10101",
      "10101",
    ]
  },
  
    "n": {
    width: 4,
    data: [
      "1110",
      "1001",
      "1001",
      "1001",
    ]
  },
  
    "o": {
    width: 4,
    data: [
      "0110",
      "1001",
      "1001",
      "0110",
    ]
  },
  
    "p": {
    width: 4,
    baseline: 3,
    data: [
      "0110",
      "1001",
      "1001",
      "1110",
      "1000",
      "1000",
    ]
  },
  
    "q": {
    width: 4,
    baseline: 3,
    data: [
      "0110",
      "1001",
      "1001",
      "0111",
      "0001",
      "0001",
    ]
  },
  
    "r": {
    width: 3,
    data: [
      "111",
      "100",
      "100",
      "100",
    ]
  },
  
      "s": {
    width: 3,
    data: [
      "011",
      "100",
      "001",
      "110",
    ]
  },
  
    "t": {
    width: 3,
    data: [
      "100",
      "100",
      "110",
      "100",
      "101",
      "010",
    ]
  },
  
    "u": {
    width: 4,
    data: [
      "1001",
      "1001",
      "1001",
      "0111",
    ]
  },
  
    "v": {
    width: 3,
    data: [
      "101",
      "101",
      "101",
      "010",
    ]
  },
  
    "w": {
    width: 5,
    data: [
      "10101",
      "10101",
      "10101",
      "01111",
    ]
  },
  
    "x": {
    width: 4,
    data: [
      "1001",
      "0110",
      "0110",
      "1001",
    ]
  },
  
    "y": {
    width: 4,
    baseline: 3,
    data: [
      "1001",
      "1001",
      "1001",
      "0111",
      "0001",
      "0110",
    ]
  },
  
    "z": {
    width: 3,
    data: [
      "111",
      "001",
      "010",
      "111",
    ]
  },
  
// ==========================
// Numbers!
// ==========================
  
    "0": {
    width: 4,
    data: [
      "0110",
      "1001",
      "1101",
      "1011",
      "1001",
      "0110",
    ]
  },
  
   "1": {
    width: 2,
    data: [
      "01",
      "11",
      "01",
      "01",
      "01",
      "01",
    ]
  },
  
    "2": {
    width: 4,
    data: [
      "0110",
      "1001",
      "0001",
      "0110",
      "1000",
      "1111",
    ]
  },
  
    "3": {
    width: 4,
    data: [
      "1110",
      "0001",
      "0110",
      "0001",
      "0001",
      "1110",
    ]
  },
  
    "4": {
    width: 4,
    data: [
      "0011",
      "0101",
      "1001",
      "1111",
      "0001",
      "0001",
    ]
  },
  
    "5": {
    width: 4,
    data: [
      "1111",
      "1000",
      "1110",
      "0001",
      "0001",
      "1110",
    ]
  },
  
    "6": {
    width: 4,
    data: [
      "0110",
      "1000",
      "1111",
      "1001",
      "1001",
      "0110",
    ]
  },
  
    "7": {
    width: 4,
    data: [
      "1111",
      "0001",
      "0010",
      "0100",
      "0100",
      "0100",
    ]
  },
  
    "8": {
    width: 4,
    data: [
      "0110",
      "1001",
      "1111",
      "1001",
      "1001",
      "0110",
    ]
  },
  
    "9": {
    width: 4,
    data: [
      "0110",
      "1001",
      "1001",
      "0111",
      "0001",
      "0110",
    ]
  },
  
  
// ==========================
// Glyphs!
// ==========================
  
    " ": {
    width: 1,
    data: [
      "000",
      "000",
      "000",
      "000",
      "000",
    ]
  },
  
    ".": {
    width: 1,
    baseline: 0,
    data: [
      "1",
    ]
  },
  
    ",": {
    width: 2,
    baseline: 0,
    data: [
      "01",
      "10",
    ]
  },
  
    ":": {
    width: 1,
    baseline: 3,
    data: [
      "1",
      "0",
      "0",
      "1",
    ]
  },
  
    ";": {
    width: 2,
    baseline: 3,
    data: [
      "01",
      "00",
      "00",
      "01",
      "10",
    ]
  },
  
    "!": {
    width: 1,
    data: [
      "1",
      "1",
      "1",
      "1",
      "0",
      "1",
    ]
  },
  
    "?": {
    width: 3,
    data: [
      "010",
      "101",
      "001",
      "010",
      "000",
      "010",
    ]
  },
  
    "(": {
    width: 2,
    data: [
      "01",
      "10",
      "10",
      "10",
      "10",
      "01",
    ]
  },
  
    ")": {
    width: 2,
    data: [
      "10",
      "01",
      "01",
      "01",
      "01",
      "10",
    ]
  },
  
    "[": {
    width: 2,
    data: [
      "11",
      "10",
      "10",
      "10",
      "10",
      "11",
    ]
  },
  
    "]": {
    width: 2,
    data: [
      "11",
      "01",
      "01",
      "01",
      "01",
      "11",
    ]
  },
  
    "{": {
    width: 3,
    data: [
      "001",
      "010",
      "010",
      "110",
      "010",
      "001",
    ]
  },
  
    "}": {
    width: 3,
    data: [
      "100",
      "010",
      "010",
      "011",
      "010",
      "100",
    ]
  },
  
    "/": {
    width: 3,
    data: [
      "001",
      "001",
      "010",
      "010",
      "100",
      "100",
    ]
  },
  
    "'": {
    width: 1,
    baseline: 5,
    data: [
      "1",
      "1",
    ]
  },
  
    "-": {
    width: 3,
    baseline: 2,
    data: [
      "111",
    ]
  },
  
    "_": {
    width: 4,
    baseline: 0,
    data: [
      "1111",
    ]
  },
  
    "–": {
    width: 4,
    baseline: 2,
    data: [
      "1111",
    ]
  },
  
    "~": {
    width: 5,
    baseline: 2,
    data: [
      "00001",
      "01110",
      "10000",
    ]
  },
  
    "^": {
    width: 5,
    baseline: 5,
    data: [
      "00100",
      "01010",
      "10001",
    ]
  },
  
};

// ==========================
// DRAW
// ==========================

function drawGlyph(letter, x, baselineY) {
  let glyph = glyphs[letter];
  if (!glyph) return;

  for (let row = 0; row < glyph.data.length; row++) {
    for (let col = 0; col < glyph.width; col++) {

      if (glyph.data[row][col] === "1") {

        let gx = x + col * gridSpacing;

        let baselineRow = glyph.baseline ?? (glyph.data.length - 1);

        let gy = baselineY +
                 (row - baselineRow) * gridSpacing;

        drawDot(gx, gy);

        // Store for second pass
        innerDotPositions.push({ x: gx, y: gy });
      }
    }
  }
}

function drawText() {
  if (!typedText.length) return;

  const margin = 100;
  const lineHeight = 8 * gridSpacing;

  let lines = [];
  let currentLine = "";
  let currentWidth = 0;

  // --- Build wrapped lines ---
for (let letter of typedText) {

  // HARD RETURN
  if (letter === "\n") {
    lines.push(currentLine);
    currentLine = "";
    currentWidth = 0;
    continue;
  }

  let glyph = glyphs[letter];
  if (!glyph) continue;

  let glyphWidth = (glyph.width + 1) * gridSpacing;

  if (currentWidth + glyphWidth > width - margin * 2) {
    lines.push(currentLine);
    currentLine = letter;
    currentWidth = glyphWidth;
  } else {
    currentLine += letter;
    currentWidth += glyphWidth;
  }

}

  if (currentLine.length) {
    lines.push(currentLine);
  }
  
  let cols = floor(width / gridSpacing);
let rows = floor(height / gridSpacing);

let gridWidth = cols * gridSpacing;
let gridHeight = rows * gridSpacing;

let offsetX = (width - gridWidth) / 2;
let offsetY = (height - gridHeight) / 2;

  // --- Calculate total height ---
  let totalHeight = lines.length * lineHeight;

  // --- Find starting Y so block is vertically centered ---
  let startRow = floor((rows - (totalHeight / gridSpacing)) / 2);
let startY = offsetY + startRow * gridSpacing + lineHeight / 2;

  // --- Render lines ---
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // measure line width
    let lineWidth = 0;
    for (let letter of line) {
      let glyph = glyphs[letter];
      if (!glyph) continue;
      lineWidth += (glyph.width + 1) * gridSpacing;
    }
    lineWidth -= gridSpacing;

    // center each line horizontally
    let x = offsetX + floor((cols - lineWidth / gridSpacing) / 2) * gridSpacing;
    let baseline = startY + i * lineHeight;

    for (let letter of line) {
      let glyph = glyphs[letter];
      if (!glyph) continue;

      drawGlyph(letter, x, baseline);
      x += (glyph.width + 1) * gridSpacing;
    }
  }
}
// ==========================
// INPUT
// ==========================

function keyTyped() {
  if (glyphs[key]) {
    typedText += key;
  }
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    typedText = typedText.slice(0, -1);
  }

  if (keyCode === ENTER || keyCode === RETURN) {
    typedText += "\n";
  }


}