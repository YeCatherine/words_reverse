function spinWords(string) {
  let myString = string.split(" ");
  let val = myString.map(function (value) {
    value.length >= 5
      ? (value = value.split("").reverse().join(""))
      : (value = value);
    console.log(value.split("").reverse().join(""));
    return value;
  });

  let newString = val.join(" ");

  console.log(newString);
}
spinWords("My kata's Test for stydying");
