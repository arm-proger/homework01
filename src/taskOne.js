const arr = ['aaa', 'bbbdfff']

function itemsLength(array){
  let newArr = []
  array.forEach(el => {
    newArr.push(el.length)
  });

  return newArr
}

console.log(itemsLength(arr))