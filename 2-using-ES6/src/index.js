const element = document.createElement('div');
element.innerText = "Hello";

const func = () => {
  const element = document.createElement('div');
  element.innerText = "World";
  return element;
}

document.body.appendChild(element);
document.body.appendChild(func());