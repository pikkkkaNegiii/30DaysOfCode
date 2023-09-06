//========= find missing no in array  =====================//

const A = [0, 1, 2, 6, 4, 5];
const B = [5, 4, 3, 2, 9, 0];

const missingInA = A.filter(number => !B.includes(number));
const missingInB = B.filter(number => !A.includes(number));
const allMissingNumbers = [...missingInA, ...missingInB];

console.log('All Missing Numbers:', allMissingNumbers);
