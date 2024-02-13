export const createAndAppendElement = (
  tagName,
  className,
  appendElem,
  textContent
) => {
  const element = document.createElement(tagName)
  element.className = className
  element.textContent = textContent
  appendElem.appendChild(element)
  return element
}
