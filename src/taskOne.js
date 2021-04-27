// Our items
const arr = ['aaa', 'bbbdfff']

// Function for items
function itemsLength(array){
  let newArr = []
  array.forEach(el => {
    newArr.push(el.length)
  });

  return newArr
}

// Console log
console.log(itemsLength(arr))