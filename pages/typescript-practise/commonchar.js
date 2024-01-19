var sample = "Extraordinary";
// const sample = "Good";
var data = sample.split("");
var maxChard = {};
for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
    var d = data_1[_i];
    if (maxChard[d]) {
        maxChard[d]++;
    }
    else {
        maxChard[d] = 1;
    }
}
var maxChar = Object.keys(maxChard).reduce(function (a, b) {
    return maxChard[a] > maxChard[b] ? a : b;
});
console.log("The most common character within the string : " + maxChar);
