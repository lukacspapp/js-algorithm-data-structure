// multiple pointers

function countUniqueValues(arr) {
  if (arr === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {

    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    }

  }
  return i + 1;
}
const sortedArray = [1, 1, 2, 2, 2, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5]
console.log(countUniqueValues(sortedArray));