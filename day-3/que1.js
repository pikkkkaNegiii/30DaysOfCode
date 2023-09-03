//================== duplicate in array ==================//
let A = [0, 1, 2, 3, 4, 5];
let B = [5, 4, 3, 2, 1, 0];

const unique = new Set();

const duplicates = [];

for (const item of A) {
  unique.add(item);
}

for (const item of B) {
  if (unique.has(item)) {
    duplicates.push(item);
  }
}

console.log("Duplicate values:", duplicates);
