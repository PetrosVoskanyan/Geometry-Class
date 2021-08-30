class Circle {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }

    get area() {
        return Math.PI * this.radius ** 2;
    }
}

const renderCircle = (circle) => `
<div class="circle-card">
  <div class="circle-area">
  <div>area: </div>
    <b>${circle.area.toFixed(2)}</b>
  </div>
  <div class="circle-center">
    <div class="circle-center-text">Center: </div>  ${renderPoint(
      circle.center
    )}
  </div>
</div>
`;

const renderCircleList = (circles) => `
  <div class="page-section">
    <h1>Circle</h1>
    <div class="circle-list">
      ${circles.map(renderCircle).join("")}
    </div>
  </div>
`;