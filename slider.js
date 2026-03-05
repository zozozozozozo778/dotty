document.querySelectorAll(".range-slider").forEach(slider => {
  const input = slider.querySelector("input");
  const fill = slider.querySelector(".slider-fill");
  const target = slider.dataset.target;

  // 👇 grab the value span
  const valueDisplay =
    slider.closest(".slider-row").querySelector(".slider-value");

  const updateSlider = () => {
    const percent =
      ((input.value - input.min) / (input.max - input.min)) * 100;

    fill.style.width = percent + "%";

    const multiplier = parseFloat(input.value);

    // 👇 update visible number
    valueDisplay.textContent = multiplier.toFixed(1);

    // Connect to p5 variables (MULTIPLY base values)
    if (target === "gridSpacing") {
      gridSpacing = baseGridSpacing * multiplier;
    }

    if (target === "outerDotSize") {
      outerDotSize = baseOuterDotSize * multiplier;
    }

    if (target === "innerDotSize") {
      innerDotSize = baseInnerDotSize * multiplier;
    }
  };

  input.addEventListener("input", updateSlider);
  updateSlider();
});

// Show Grid toggle
document.getElementById("toggleGrid")
  .addEventListener("change", function () {
    showGrid = this.checked;
  });

// Show Inner Dot toggle
document.getElementById("toggleInnerDot")
  .addEventListener("change", function () {
    showInnerDot = this.checked;
  });

 // 👇 Makes panel collapsable

const panel = document.getElementById("controlPanel");
const collapseBtn = document.getElementById("collapseBtn");

collapseBtn.addEventListener("click", () => {
  panel.classList.toggle("collapsed");

  collapseBtn.textContent =
    panel.classList.contains("collapsed") ? "+" : "−";
});

 // 👇 Makes panel draggable

const header = document.getElementById("controlHeader");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

header.addEventListener("mousedown", (e) => {

  const rect = controlPanel.getBoundingClientRect();

  controlPanel.style.left = rect.left + "px";
  controlPanel.style.top = rect.top + "px";
  controlPanel.style.right = "auto";

  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

  isDragging = true;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  controlPanel.style.left = (e.clientX - offsetX) + "px";
  controlPanel.style.top = (e.clientY - offsetY) + "px";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});


 // 👇 Color fill inputs
let bgColor = "#ffffff";
let letterColor = "#434343";
let dotColor = "#E5E5E5";

document.getElementById("bgColor").addEventListener("input", (e) => {
  bgColor = e.target.value;
});

document.getElementById("letterColor").addEventListener("input", (e) => {
  letterColor = e.target.value;
});

document.getElementById("dotColor").addEventListener("input", (e) => {
  dotColor = e.target.value;
});


