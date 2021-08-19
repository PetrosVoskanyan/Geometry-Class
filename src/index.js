const points = [
  new Point(2, 2),
  new Point(2, 5),
  new Point(5, 2),
  new Point(5, 2),
  new Point(3, 9),
  new Point(5, 5),
  new Point(4, 8),
  new Point(2, 4),
  new Point(8, 3)
];

const pointRoot = document.getElementById("point-root");

pointRoot.innerHTML = renderPointList(points);

const triangles = [
  new Triangle(points[0], points[1], points[2]),
  new Triangle(points[3], points[4], points[5])
];

const triangleRoot = document.getElementById("triangle-root");

triangleRoot.innerHTML = renderTriangleList(triangles);

const circles = [new Circle(points[8], 3), new Circle(points[7], 2)];

const circleRoot = document.getElementById("circle-root");

circleRoot.innerHTML = renderCircleList(circles);

const rectangles = [
  new Rectangle(points[0], points[1], points[2], points[5]),
  new Rectangle(points[3], points[4], points[5], points[2])
];

const rectngleRoot = document.getElementById("rectangle-root");

rectngleRoot.innerHTML = renderRectangleList(rectangles);
