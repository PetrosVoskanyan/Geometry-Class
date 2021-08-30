class Point {
    constructor(name, x, y) {
        if (typeof x !== "number" || typeof y !== "number") {
            throw new Error("Point constructur exptects two number arguments");
        }

        this.x = x;
        this.y = y;
        this.name = name;
    }

    distanceFrom(point) {
        return Math.sqrt((this.x - point.x) ** 2 + (this.y - point.y) ** 2);
    }
}

const renderPoint = (point) => `
  <div class="point-chip">
    <div class="text">
    <b>${point.name}</b>
      <b>(</b>
      <span>${point.x}</span>
    </div>
    <div class="text">
      <b>,</b>
      <span>${point.y}</span>
      <b>)</b>
    </div>
   </div>
`;

const renderPointList = (points) => points.map(renderPoint).join("");