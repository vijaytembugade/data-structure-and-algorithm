const arr = [45, 9, 46, 24, 52, 20, 13];

let n = arr.length;

for (let i = 0; i < n - 1; i++) {
  let minimumIndex = i;
  for (let j = i + 1; j < n; j++) {
    if (arr[j] < arr[minimumIndex]) {
      minimumIndex = j;
    }
  }

  let temp = arr[i];
  arr[i] = arr[minimumIndex];
  arr[minimumIndex] = temp;
}

console.log(arr);
