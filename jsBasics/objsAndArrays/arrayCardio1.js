// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const inventorsBornIn1500s = inventors.filter(
  (innerObj) => innerObj.year >= 1500 && innerObj.year <= 1599
);
console.table(inventorsBornIn1500s);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const inventorsFirstLastNms = inventors.map(
  (innerObj) => `${innerObj.first} ${innerObj.last}`
);
console.table(inventorsFirstLastNms);
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const oldestToYoungest = inventors.sort((a, b) => a.year - b.year);
console.table(oldestToYoungest);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalInventorLifeSpan = inventors.reduce((acc, nextObj) => {
  const currLifeSpan = nextObj.passed - nextObj.year;
  return acc + currLifeSpan;
}, 0);
console.log(totalInventorLifeSpan);

// even better with destructuring
// const totalInventorLifeSpan = inventors.reduce(
//     (acc, { year, passed }) => acc + (passed - year),
//     0
//   );

// 5. Sort the inventors by years lived
const byYrsLived = inventors.sort((a, b) => {
  const aLifespan = a.passed - a.year;
  const bLifespan = b.passed - b.year;
  return aLifespan > bLifespan ? -1 : 1;
});
console.table(byYrsLived);
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// this all must be done in console of webpage above
// const allLinks = document.querySelectorAll(".mw-category a");
// console.log(allLinks);
// const de = Array.from(allLinks)
// .map((link) => link.textContent)
// .filter((street) => street.includes("de"));
// console.table(de)

// 7. sort Exercise
// Sort the people alphabetically by last name
const byLastNm = people.sort((firstOne, lastOne) => {
  // splits strings by ", "
  const [lastOneLastNm, lastOneFirstNm] = lastOne.split(", ");
  const [firstOneLastNm, firstOneFirstNm] = firstOne.split(", ");
  return firstOneLastNm > lastOneLastNm ? 1 : -1;
});
console.table(byLastNm);
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const countsOfData = data.reduce((acc, car) => {
    //if the key exists, increment
    if (car in acc) {
        acc[car]++
    // if it does not it is "first encounter"
    } else {
        acc[car] = 1
    }
    return acc
}, init = {})

console.table(countsOfData)
