// function myFunction(arr) {
//   arr.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//   });
//   return arr;
// }
// let op=myFunction([4,2,3,1])
// OR
// return arr.sort((a, b) => b - a);

// function myFunction(obj) {
//   console.log(obj["prop-2"]) ;
// }
// const op = myFunction({ one: 1, "prop-2": 2 });

// function myFunction(a) {
//   // console.log("{key:'" + `${a}` + "'}");
//   let obj = {};
//   let key = "key";
//   obj[key] = a;
//   console.log(obj);
// }
// OR;
// return { key: a };
// myFunction("a");
// // Expected{key:'a'}

// function myFunction(a, b) {
//   let obj = {};
//   obj[a] = b;
//   return obj;
// }
// return { [a]: b };
// myFunction("z", "x");
// Expected{z:'x'}

// function myFunction(a) {
//   let sum = 0;
//   for (const element of Object.values(a)) {
//     sum += element;
//   }
//   return sum;
// }
// // OR
// return Object.values(a).reduce((sum, cur) => sum + cur, 0);
// const op= myFunction({ a: 1, b: 2, c: 3 });
// console.log(op)
// // Expected 6

// function myFunction(a, b) {
//   let ob = {};
//   a.forEach((key, i) => {
//     ob[key] = b[i];
//   });
//   return ob;
// }
// // OR
// // return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
// const op = myFunction(["a", "b", "c"], [1, 2, 3]);
// console.log(op);
// // Expected {a:1,b:2,c:3}

// function myFunction(x, y) {
//   let k = Object.keys(y);
//   k.splice(1, 1, "d");
//   let m = Object.values(y);
//   let ob = {};
//   k.forEach((key, i) => {
//     ob[key] = m[i];
//   });
//   return {...x, ...ob};
// }
// // OR
// const { b, ...rest } = y;
// return { ...x, ...rest, d: b };
// const op = myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 });
// console.log(op);
// // Expected{ a: 1, b: 2, c: 3, e: 5, d: 4}

// function myFunction(obj) {
//   if (obj.a) {
//     if (obj.a.b) {
//       return obj.a.b;
//     }
//   }
//   return undefined;
// }
// // OR
// return obj?.a?.b;
// const o1 = myFunction({ a: 1 });
// console.log(o1);
// // Expectedundefined
// const o2 = myFunction({ a: { b: { c: 3 } } });
// console.log(o2);
// // Expected{c:3}
// const o3 = myFunction({ b: { a: 1 } });
// console.log(o3);
// // Expectedundefined
// const o4 = myFunction({ a: { b: 2 } });
// console.log(o4);
// // Expected 2

// function myFunction(a, b) {
//   for (let key in a) {
//      a[key]= a[key]*b;
//     }  
//   return a;
// }
// // OR
// function myFunction(a, b) {
//   return Object.entries(a).reduce((acc, [key, val]) => {
//     return { ...acc, [key]: val * b };
//   }, {});
// }
// console.log(myFunction({ a: 1, b: 2, c: 3 }, 3));
// Expected {a:3,b:6,c:9}


// function myFunction(obj) {
//   delete obj.b;
//   return obj;
// }
// // oR
// const { b, ...rest } = obj;
// return rest;
// const o1 = myFunction({ b: 0, a: 7, d: 8 });
// console.log(o1);
// // Expected{ a: 7, d: 8 }
// const o2 = myFunction({ e: 6, f: 4, b: 5, a: 3 });
// console.log(o2);
// // Expected { e: 6, f: 4, a: 3 }
