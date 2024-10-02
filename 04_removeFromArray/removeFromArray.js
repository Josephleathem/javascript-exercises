const removeFromArray = function(...args) {
    const [array, ...itemsToRemove] = args; // Destructure the arguments into `array` (the first argument) and `itemsToRemove` (the rest of the arguments)
    return array.filter(item => !itemsToRemove.includes(item)); // Use the `filter` method to create a new array containing only the elements from `array` that are not included in `itemsToRemove`.

};

// Do not edit below this line
module.exports = removeFromArray;
