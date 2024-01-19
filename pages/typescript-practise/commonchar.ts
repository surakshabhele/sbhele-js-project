const sample:string = "Extraordinary";
// const sample = "Good";

const data:string[] = sample.split("");
let maxChard:object = {};

for (const d of data) {
  if (maxChard[d]) {
    maxChard[d]++;
  } else {
    maxChard[d] = 1;
  }
}
const maxChar:string = Object.keys(maxChard).reduce((a, b) =>
  maxChard[a] > maxChard[b] ? a : b
);
console.log("The most common character within the string : " + maxChar);