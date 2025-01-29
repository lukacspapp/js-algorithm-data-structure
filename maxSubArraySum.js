function maxSubArray(arr, num) {
  if (num > arr.length) return null;

  let max = -Infinity
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > num) {
      max = temp;
    }
  }
  // return max
}
15
const arr = [2, 1, 4, 5, 6]

// SLIDING WINDOW

function maxSubArray2(arr, num) {
  if (num > arr.length) return null;
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    const lastNumberInWindow = arr[i];
    const firstNumberInWindow = arr[i - num]

    tempSum = tempSum - firstNumberInWindow + lastNumberInWindow;

    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubArray2(arr, 3));

