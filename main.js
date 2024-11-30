function measurePerformance(func, input, iterations = 1000) {
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    func(input);
  }
  const end = performance.now();
  console.log(`${func.name} took ${(end - start).toFixed(2)} ms for ${iterations} iterations.`);
}

function charCount(str) {
  let result = {};

  const serializedStr = str.split('').map(i => i.trim().toLowerCase()).join('');

  for (let i = 0; i < serializedStr.length; i++) {
    const char = serializedStr[i]
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }

  return result;
}

function charCount2(str) {
  let result = {};

  const serializedStrWithNoSpecialChars = str.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '').toLowerCase();

  for (const char of serializedStrWithNoSpecialChars) {
    if (result[char] > 0) {
      result[char]++
    } else {
      result[char] = 1;
    }
  }

  return result;
}


function charCount3(str) {
  let result = {};

  const serializedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

  for (const char of serializedStr) {
    result[char] = (result[char] || 0) + 1;
  }

  return result;
}




function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);

  if (
    !(code > 47 && code < 58)
    && !(code > 64 && code < 91)
    && !(code > 69 && code < 123)
  ) {
    return false
  }

  return true
}

function charCount4(str) {
  let result = {};

  for (let char of str) {
    char = char.toLowerCase()
    if (isAlphaNumeric(char)) {
      result[char] = ++result[char] || 1;
    }
  }

  return result;
}

const testString = "Hello there!"
measurePerformance(charCount, testString);
measurePerformance(charCount2, testString);
measurePerformance(charCount3, testString);
measurePerformance(charCount4, testString);