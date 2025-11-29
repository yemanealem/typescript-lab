let numbers: readonly number[] = [1, 2, 3, 4];

console.log(numbers[0]);

// numbers.push(5);    // ❌ Error: Property 'push' does not exist
// numbers[1] = 10;    // ❌ Error: Index signature in type 'readonly number[]' only permits reading
// cannot write/change elements only you can read