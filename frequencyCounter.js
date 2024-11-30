function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}


function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1)
  }
  return true;
}


function measurePerformance(func, input1, input2, iterations = 1000) {
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    func(input1, input2);
  }
  const end = performance.now();
  console.log(`${func.name} took ${(end - start).toFixed(2)} ms for ${iterations} iterations.`);
}

const arr1 = Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 100) + 1);

// Generate an array with the squares of the numbers from arr1
const arr2 = arr1.map(num => num ** 2);

measurePerformance(same, arr1, arr2)
measurePerformance(same2, arr1, arr2)