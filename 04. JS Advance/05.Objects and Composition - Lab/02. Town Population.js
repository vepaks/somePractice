townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);

townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
function townPopulation(input) {
  let towns = {};
  for (const inputElement of input) {
    const [town, population] = inputElement.split("<->");
    if (towns.hasOwnProperty(town) === false) {
      towns[town] = 0;
    }
    towns[town] += Number(population);
  }

  Object.keys(towns).forEach((el) => {
    console.log(`${el} : ${towns[el]}`);
  });
}

// Sofia : 1200000
// Montana : 20000
// New York : 10000000
// Washington : 2345000
// Las Vegas : 1000000
