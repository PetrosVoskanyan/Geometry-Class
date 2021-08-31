class Rectangle {
    constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    get firstSide() {
        return this.a.distanceFrom(this.b);
    }

    get secondSide() {
        return this.b.distanceFrom(this.c);
    }

    get thirdSide() {
        return this.c.distanceFrom(this.d);
    }

    get fourthSide() {
        return this.d.distanceFrom(this.a);
    }

    get area() {
        return (
            Math.max(
                this.firstSide,
                this.secondSide,
                this.thirdSide,
                this.fourthSide
            ) *
            Math.min(this.firstSide, this.secondSide, this.thirdSide, this.fourthSide)
        );
    }

    get isValid() {
        const firstTriangle = new Triangle(this.a, this.b, this.d);
        const secondTriangle = new Triangle(this.b, this.d, this.c);

        return (
            firstTriangle.area().toFixed(7) + secondTriangle.area().toFixed(7) ===
            this.area.toFixed(7)
        );
    }
}

const renderRectangle = (rectangle) => `
<div class="rectangle-card ${rectangle.isValid ? "" : "is-invalid"}"">
  <div class="rectangle-area">
  <div>area:</div>
  <b>${rectangle.area.toFixed(2)}</b>
  </div>
          <div class="triangle-sides">
            <div class="text">
              <div>firstSide:</div>
              <b>${rectangle.firstSide.toFixed(2)}</b>
            </div>
            <div class="text">
              <div>secondSide:</div>
              <b>${rectangle.secondSide.toFixed(2)}</b>
            </div>
            <div class="text">
              <div>thirdSide:</div>
              <b>${rectangle.thirdSide.toFixed(2)}</b>
            </div>
            <div class="text">
              <div>fourthSide:</div>
              <b>${rectangle.fourthSide.toFixed(2)}</b>
            </div>
          </div>
  <div class="rectangle-vertices">
        ${[rectangle.a, rectangle.b, rectangle.c, rectangle.d]
          .map(renderPoint)
          .join("")}
  </div>
</div>
`;

const renderRectangleList = (rectangles) => `
  <div class="rectange-list">
    ${rectangles.map(renderRectangle).join("")}
  </div>
`;