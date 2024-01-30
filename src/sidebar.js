import { createHtml, container } from "./createDOM";

const render = () => {
  const sidebar = createHtml(
    'div',
    null,
    ['sidebar'],
    null
  );

  const sidebarLabel = createHtml(
    'h3',
    null,
    ['sidebar-label'],
    'My Tasks'
  );

  container.appendChild(sidebar);
  sidebar.appendChild(sidebarLabel);
}

export { render as renderSidebar };