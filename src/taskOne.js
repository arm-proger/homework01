const arr = ['aaa', 'bbb']

function(array){
  let newArr = []
  array.forEach(el => {
    newArr.push(el.length)
  });

  return newArr
}