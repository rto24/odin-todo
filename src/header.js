import { createHtml, container } from "./createDOM";

const render = () => {
  // const header = document.createElement('div');
  const header = createHtml(
    'div',
    null,
    ['header'],
    '',
  );

  const headerTitle = createHtml(
    'h1',
    null,
    ['header-title'],
    'To-Do List'
  );

  container.appendChild(header);
  header.appendChild(headerTitle);
}

export { render as renderHeader };