function sumZero1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}



function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const testArray = [-4, -3, -2, -1, 0, 1, 2, 3, 10];

function measurePerformance(func, input, iterations = 100000) {
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    func(input);
  }
  const end = performance.now();
  console.log(`${func.name} took ${(end - start).toFixed(2)} ms for ${iterations} iterations.`);
}


measurePerformance(sumZero1, testArray)
measurePerformance(sumZero2, testArray)