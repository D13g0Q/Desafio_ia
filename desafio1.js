function removeDuplicates(array) {
    return [...new Set(array)];
}

const numbers = [1, 2, 3, 2, 4, 1, 5, 3];
const uniqueNumbers = removeDuplicates(numbers);

// Imprimir cada elemento único en consola
console.log("Elementos únicos:");
uniqueNumbers.forEach(num => {
    console.log(num);
});
