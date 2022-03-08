// const removeFromArray = (array, ...elementsToRemove) => {

//     elementsToRemove.forEach(
//         (elementToRemove) => {
//             for (let i = 0; i < array.length; i++) {
//                 const element = array[i];
//                 if (elementToRemove === element) {
//                     array.splice(i, 1);
//                 }
//             }
//         }
//     )
//     return array;
// }

const removeFromArray = (array, ...elementsToRemove) => array.filter(currentElement => !elementsToRemove.includes(currentElement))


// Do not edit below this line
module.exports = removeFromArray;
