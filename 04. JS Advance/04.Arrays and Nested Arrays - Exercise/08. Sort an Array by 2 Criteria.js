function sort(array) {
  console.log(
    array.sort((a, b) => a.length - b.length || a.localeCompare(b)).join("\n")
  );
}

sort(["alpha", "beta", "gamma"]);
