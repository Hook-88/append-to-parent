const BODY = document.querySelector('body');
const container = document.createElement('div');
container.id = 'grid-container';
BODY.appendChild(container);

const row = document.createElement('div');
const field = document.createElement('div');

row.className = 'grid-row';
field.className = 'grid-field';


function addElementsToElementsArray(numOfFields, elementType, cssClassName) {
  let fieldsArray = [];
  for (let i = 0; i < numOfFields; i++) {
    let field = createElementWithCssClassName(elementType, cssClassName);
    fieldsArray.push(field);
  }
  //return an array of fields.
  return fieldsArray;  
}



//create element with a classname to add to rowArray
function createElementWithCssClassName(html, cssClassName) {
  let element = document.createElement(html);
  element.className = cssClassName;
  return element;
}

const testFieldsArray = addElementsToElementsArray(8, 'div','grid-field');
const testRowArray = addElementsToElementsArray(8, 'div', 'grid-row');
console.log(testFieldsArray);
console.log(testRowArray);


