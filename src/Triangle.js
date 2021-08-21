class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get ab() {
        return this.a.distanceFrom(this.b);
    }
    get bc() {
        return this.b.distanceFrom(this.c);
    }
    get ca() {
        return this.c.distanceFrom(this.a);
    }
    area() {
        const p = (this.ab + this.bc + this.ca) / 2;
        return Math.sqrt(p * (p - this.ab) * (p - this.bc) * (p - this.ca));
    }

    get isValid() {
        const max = Math.max(this.ab, this.bc, this.ca);
        return max < this.ab + this.bc + this.ca - max;
    }
}


const renderTriangle = (triangle) => `
<div class="triangle-card ${triangle.isValid ? "" : "is-invalid"}">
<div class="triangle-info-container">
  <div class="triangle-area">
    <div>area:</div>
    <b>${triangle.area().toFixed(2)}</b>
  </div>

  <div class="triangle-sides">
    <div class="text">
      <div>firstSide:</div>
      <b>${triangle.ab.toFixed(2)}</b>
    </div>
    <div class="text">
      <div>secondSide:</div>
      <b>${triangle.bc.toFixed(2)}</b>
    </div>
    <div class="text">
      <div>thirdSide:</div>
      <b>${triangle.ca.toFixed(2)}</b>
    </div>
  </div>
  <div class="triangle-vertices">
    ${[triangle.a, triangle.b, triangle.c].map(renderPoint).join("")}
  </div>
</div>
</div>
`;


const renderTriangleList = (triangles) => `
  <div class="page-section">
    <h1>Triangle</h1>
    <div class="triangle-list">
      ${triangles.map(renderTriangle).join("")}
    </div>
  </div>
`;