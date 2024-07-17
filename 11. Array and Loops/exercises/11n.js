function countWords(words) {
  const result = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    //result[word] undefined, yəni falsy valuedur
    if (!result[word]) {
        result[word] = 1;
    } else {
        result[word]++;
    }
  }

  return console.log(result);;
}

countWords(["apple", "grape", "apple", "apple"]);
