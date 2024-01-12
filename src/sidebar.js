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

}

export { render as renderSidebar };