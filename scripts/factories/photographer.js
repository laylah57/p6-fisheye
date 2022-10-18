function createNodeElement(childElement, parentElement, tagName, textContent) {
  childElement = document.createElement(tagName);
  parentElement.appendChild(childElement);

  childElement.textContent = textContent;
  return { childElement, parentElement, tagName };
}


