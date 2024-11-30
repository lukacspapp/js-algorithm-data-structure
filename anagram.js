function validAnagram(str1, str2) {

  if (str1.length != str2.length) return false;

  const str1Array = str1.split('')
  const str2Array = str2.split('')

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (const letter of str1Array) {
    frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
  }

  for (const letter of str2Array) {
    frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}

function validAnagram2(string1, string2) {

  if (string1.length !== string2.length) return false;

  let frequencyObject = {};

  for (let i = 0; i < string1.length; i++) {
    const letter = string1[i];
    frequencyObject[letter] ? frequencyObject[letter] += 1 : frequencyObject[letter] = 1;
  };

  console.log(frequencyObject);

  for (let i = 0; i < string2.length; i++) {
    const letter = string2[i];
    if (!frequencyObject[letter]) {
      return false;
    } else {
      frequencyObject[letter]--
    }
  };

  return true;
};
console.log(validAnagram2('sanyis', 'anyiis'));