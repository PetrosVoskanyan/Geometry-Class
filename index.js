const points = [
    new Point("A", 2, 2),
    new Point("B", 2, 5),
    new Point("C", 5, 2),
    new Point("D", 5, 2),
    new Point("E", 3, 9),
    new Point("F", 5, 5),
    new Point("G", 4, 8),
    new Point("H", 2, 4),
    new Point("I", 8, 3)
];

const triangles = [
    new Triangle(points[0], points[1], points[2]),
    new Triangle(points[3], points[4], points[5])
];

const circles = [new Circle(points[8], 3), new Circle(points[7], 2)];

const rectangles = [
    new Rectangle(points[0], points[1], points[2], points[5]),
    new Rectangle(points[3], points[4], points[5], points[2])
];

const appRoot = document.getElementById('app-root');


const renderApp = () => {
  appRoot.innerHTML = `
  <div class="page-container">
    ${getAppHeader({ appName: 'Figures', pages})}
  </div>

  ${
    activePage.data ? `
    <div class="page-section">
      <h1>${activePage.data.pageName}</h1>
        ${activePage.data.renderPage()}
    </div>
  ` : ''
  }
`;
};

renderApp();