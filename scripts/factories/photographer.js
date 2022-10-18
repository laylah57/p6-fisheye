function createNodeElement(childElement, parentElement, tagName, textContent, ariaContent) {
  childElement = document.createElement(tagName);
  parentElement.appendChild(childElement);
  childElement.setAttribute('aria-label', ariaContent);

  childElement.textContent = textContent;
  return { childElement, parentElement, tagName, ariaContent };
}

function addAcessibility(element, content){
    element.setAttribute('aria-label', content);
  return { element, content };
}
