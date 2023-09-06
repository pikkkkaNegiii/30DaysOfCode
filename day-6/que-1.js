// =============  Find common elements in array  ==============//
const A = [0, 1, 2, 3, 4, 5];
const B = [5, 4, 3, 2, 1, 0];

const setA = new Set(A);

const commonElement = [];

for (const element of B) {
    if (setA.has(element)) {
      commonElement.push(element)  ;
    } 
}

console.log('common elements: ', commonElement);