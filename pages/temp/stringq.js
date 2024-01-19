// function myFunction(a ) {
//   let x = typeof a;
//   return x;
// }
// console.log(myFunction("suraksha"))

// function myFunction(str) {
//   return str.slice(-3);
// }
// console.log(myFunction("suraksha"))

// function myFunction(obj) {

//   return obj.country;
// }
// console.log(myFunction({ continent: "Asia", country: "Japan" }))

// function myFunction(c, d) {
//   let a = 4;
//   let b = 5;
//   return a == b && typeof a == typeof b ? true : false;
// }
// // myFunction();
// console.log(myFunction())

// function myFunction(a, n) {
//   let x = "suraksha";
//   return x.charAt(n-1);
// }
// console.log(myFunction())

// function myFunction(a) {
//   let x = a.slice(-3);
//   return x;
// }
// console.log(myFunction("sjhdkjsjas"));

// function myFunction(a, b, c, d, e, f) {
//   let x = a + b;
//   let y = x - c;
//   let z = (y * d) / e;
//   let p = z ** f;
//   return p;
// }
// function myFunction(a, b) {
//   let key = Object.keys(a);
//   let ans = key.includes(b);
//   return ans;
// }

// function myFunction(a, n) {
//   // console.log(a)
//   // console.log(n)
//   for (i = 0; i < a.length; i++) {
//     // console.log(a[i])
//     if (i == n-1) {
//       console.log(a[i]);
//     }
//   }
//   // or return a[n-1]
// }
// myFunction([10, 9, 8, 7, 6], 5);
// // myFunction([1,2,3,4,5],3)

// function myFunction(a) {
//   let x = a.split(-3);
//   return a;
// }
// console.log(myFunction("abcdefg"));

// function myFunction(a, b) {
//   if (a.includes(b)) {
//     let arr = a.split('');
//   let newarr=  arr.unshift(b)
//   console.log(arr.join(''))
//   } else {
//     let arr = a.split('');
//   let newarr=  arr.push(b)
//   console.log(arr.join(''))
//   }
// }
// function myFunction(a, b) {
//   let arr=a.split('')
//   // console.log( a.indexOf(b) )
//   return arr.indexOf(b) === -1 ? a + b : b + a
// }
// let output=myFunction('lips', 's');
// console.log(output)

// function myFunction(a) {
//   let arr = a.split("");
//   let rev = arr.reverse();
//   // console.log(rev)
//   let newa = rev.slice(3);
//   let op = newa.reverse();
//   let lop= op.join('');
//   console.log(lop);
// }
// const op1 = myFunction("abcdefg");
// const op2 = myFunction("1234");
// const op3 = myFunction('fgedcba'); OR slice(0,-3)

// function myFunction(a) {
//   let b == a % 2 ? true : false;
// }
// const op =myFunction(10);

// function myFunction(a, b) {
//   let arr = b.split("");
//   // arr.forEach((element) => {
//   //   console.log(element);
//   // });
//   let count=0;
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i])
//     if (a==arr[i]) {
//       //  console.log(count++) ;
//       // let op = count++;
//        count++;
//     }
//   }
//   return count;
// }
// const out = myFunction("h", "how many times does the character occur in this sentence?");
// // Expected 4
// console.log(out);
// const out1=myFunction("?", "how many times does the character occur in this sentence?");
// console.log(out1)
// OR return b.split(a).length - 1
// OR
// function myFunction(a, b) {
//   let arr = b.split("");
//   let count = 0;
//   arr.forEach((element) => {
//     // console.log(element);
//     if (a == element) {
//       count++;
//     }
//   });
//   return count;
// }
// const out = myFunction("h","how many times does the character occur in this sentence?");
// console.log(out);

// function myFunction(a) {
//   return Math.round(a);
// }
// let out = myFunction(2.12397);
// console.log(out);
// Expected2.12

// function abc(a) {
//   let q = [];
//   let c = a.toString();
//   c = c.split(``);
// c.map((p)=>{
//     // console.log(p)
//     return q.push(parseInt(p))
// })
// //   for(let i=0;i<c.length;i++){
// //     q.push(parseInt(c[i]))
// //   }
//   return q;
// }
// const y = abc(10);
// console.log(y);  OR
// function myFunction( a ) {
//   const string = a + '';
//   const strings = string.split('');
//   return strings.map(digit => Number(digit))
// }

// function myFunction(a, b) {
//   let rep1 = a.replace("%", "");
//   let rep2 = b.replace("%", "");
//   let spli2 = rep2.split("");
//   let rev = spli2.reverse();
//    let str = rev.join("");
//    let op = rep1 + str;
//   const str2 = op.charAt(0).toUpperCase() + op.slice(1);
//   return str2;
// }
// OR
// function myFunction(a, b) {
//   const func = x => x.replace('%','');
//   const first = func(a);
//   const second = func(b).split('').reverse().join('');
//   // console.log(second)
//   return first.charAt(0).toUpperCase() + first.slice(1) + second;
// }
// const op1 = myFunction("java", "tpi%rcs");
// Expected'Javascript'
// const op2 = myFunction("c%ountry", "edis");
// console.log(op1);
// console.log(op2);

// const nextPrimeNumber = (num) => {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         return nextPrimeNumber(num + 1);
//       }
//     }
//     return num;
//   };
//   console.log(nextPrimeNumber(7)); // 97
//   console.log(nextPrimeNumber(38));

// function checkPrime(number) {
//   for (var i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// function myFunction(number) {
//   if (checkPrime(number)) {
//     return number;
//   } else {
//     while (checkPrime(number) === false) {
//       number++;
//     }
//   }
//   return number;
// }
// console.log(myFunction(38));

// function myFunction( a ) {
//   function isPrime(num) {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return num > 1;
//   }
//  let n = a;
//  while (!isPrime(n)) n++;
// return n
// }
// console.log(op1)
// Expected41
// myFunction(7);
// Expected7

// function myFunction(x, y) {
//   while (x % y !== 0) x++;
//   return x;
// }
// function myFunction(x, y) {
//   if (x % y == 0) {
//     return x;
//   }
//   return myFunction(x + 1, y);
// }
// myFunction(23, 23);
// // Expected23
// myFunction(7, 3);
// // Expected9

// function myFunction(str) {
//   let m = "";
//   for (let i = 0; i < str.length; i++) {
//     let n = 0;
//     let e = str[i];
//     let asciicode = e.charCodeAt(0);
//     console.log(asciicode);
//     n = asciicode + 1;
//     let asciichar = String.fromCharCode(n);
//     console.log(asciichar);
//     m = m + asciichar;
//     console.log(m);
//   }
// }
// // OR
// // const arr = [...str];
// // const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
// // return correctedArray.join('');
// const op = myFunction("bnchmf");
// // Expected'coding'
// const op2 = myFunction("bgddrd");

// for (let i = a.length; i >= -2; i--)

// function myFunction(a, b) {
//   let arr = a.split('')
//   for (let i = arr.length - 3; i > 0; i -= 3) {
//     arr.splice(i, 0, b)
//   }
//   return arr.join('')
// }
// OR
// let result = [];
// let rest = a;
// while (rest.length) {
//   result.push(rest.slice(-3));
//   rest = rest.slice(0, -3);
// }
// return result.reverse().join(b);
// console.log( myFunction('1234567','.'))
// ExpecteZ'1.234.567'

// function myFunction(a, b) {
//   if(a.b >=0){
//   return true
//   }
//   return false;
// }
// OR
// function myFunction(a, b) {
//   return Boolean(a[b]);
// }

// function myFunction(a) {
//   let o = a.toFixed(2);
//   console.log(o) ;
// }
// myFunction(2.12397)

// function myFunction(a) {
//   for (let m = 0; m <= a.length; m++) {
//     if (a[m] === "i") {
//       return m;
//     }}}
// OR;
// function myFunction(a) {
//   return a.indexOf("is");
// }
// console.log(myFunction("praise"));
// // Expected 3
