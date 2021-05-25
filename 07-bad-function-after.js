
function renderContent(renderInformation) {
  const element = renderInformation.element;
  const rootElement = renderInformation.root;
  
  validateElementType(element);

  const content = createRenderableContent(renderInformation);
  renderOnRoot(rootElement, content);
}