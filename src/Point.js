class Point {
  constructor(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("Point constructur exptects two number arguments");
    }

    this.x = x;
    this.y = y;
  }

  distanceFrom(point) {
    return Math.sqrt((this.x - point.x) ** 2 + (this.y - point.y) ** 2);
  }
}

const renderPoint = (point) => `
  <div class="point-chip">
    <div class="text">
      <div>x:</div>
      <b>${point.x}</b>
    </div>
    <div class="text">
      <div>y:</div>
      <b>${point.y}</b>
    </div>
   </div>
`;

const renderPointList = (points) => `
  <div class="page-section">
    <h1>Point</h1>
    <div class="point-list">
        ${points.map(renderPoint).join("")}
    </div>  
  </div>
`;
