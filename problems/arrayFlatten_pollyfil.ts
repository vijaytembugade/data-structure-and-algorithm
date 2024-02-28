const arr = [1, 2, 3, 4, 'string', ['2', '3', 4, [1, 2, 3]], [1, 2, 354, 9890]];

function flattenArr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string' || typeof arr[i] === 'number') {
      newArr = [...newArr, arr[i]];
    }
    if (typeof arr[i] === 'object') {
      newArr = [...newArr, ...flattenArr(arr[i])];
    }
  }

  return newArr;
}

const newArr = flattenArr(arr);