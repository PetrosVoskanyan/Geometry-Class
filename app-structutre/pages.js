const pages = [ ,
  {
    pageName: 'Points',
    renderPage: () => renderPointList(points),
  },
  {
    pageName: 'Circles',
    renderPage: () => renderCircleList(circles)
  },
  {
    pageName: 'Triangles',
    renderPage: () => renderTriangleList(triangles)
  },
  {
    pageName: 'Rectangles',
    renderPage: () => renderRectangleList(rectangles)
  },
];