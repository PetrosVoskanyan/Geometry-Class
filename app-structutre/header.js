const getAppHeader = ({ appName, pages }) => `
  <div class="app-header">
    <div class=app-name>${appName}</div>

    ${getNavBar(pages)}
  </div>
`;