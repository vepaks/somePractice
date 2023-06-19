function sort(input) {
  input.sort((a, b) => a.localeCompare(b)).forEach((element, i) => {
      console.log(`${i+1}.${element}`);
  });
}
sort(["John", "Bob", "Christina", "Ema"]);
