const removeFromArray = (array, ...elementsToRemove) => {

    //for each element in arr, check if it matches any elements in elementsToRemove and if it does, remove it
    elementsToRemove.forEach(
        (elementToRemove) => {
            for (let i = 0; i < array.length; i++) {
                const element = array[i];
                if (elementToRemove === element) {
                    array.splice(i, 1);
                }
            }
        }
    )
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
