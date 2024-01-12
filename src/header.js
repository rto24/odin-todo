import { createHtml } from "./createDOM";

const render = () => {
  const header = createHtml(
    'div',
    null,
    ['header'],
    null,
  );

  const headerTitle = createHtml(
    'h1',
    null,
    ['header-title'],
    'To-Do List'
  );
}

export { render as renderHeader };