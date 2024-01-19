// function myFunction(a) {
//   let op= a.slice(-3);
//   console.log(op)
// }
// myFunction([1,2,3,4])
// // Expected[2,3,4]
// function myFunction(a, n) {
//   return a.slice(-n);
// }
// myFunction([1, 2, 3, 4, 5], 2)
// // Expected[ 4, 5 ]

// function myFunction(a, b) {
//   for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     if (a.includes(b)) {
//       let op = a.splice(b);
//       console.log(op);
//     }
//   }
// }
// myFunction([1, 2, 3], 2);
// myFunction([1,2,'2',1], 1)
// Expected[(1, 3)];

// function myFunction(a) {
//   let add = 0;
//   for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     add += element;
//   }
//   return add;
// }
// function myFunction(a) {
//   return a.reduce((acc, cur) => acc + cur, 0);
// }
// console.log(myFunction([10, 100, 40]));

// function myFunction(arr, num) {
//   if (num < 6) {
//     let a = arr.unshift(0)
//     console.log(arr) ;
//   } else {
//     let b= arr.unshift(num) ;
//     console.log(arr)
//   }
// }
// const op =myFunction([1,2,3], 6)
// const op2=myFunction(['a','b'], 2)
// OR

// function myFunction(arr, num) {
//   return [...(num > 5 ? [num] : [0]), ...arr];
//  }

// function myFunction(a) {
//   let count = 0;
//   for (let i = 0; i < a; i++) {
//     if (a.includes === a[-i]) {
//       count += a[i];
//       console.log(count);
//     }
//   }
//   return;
// }
// function myFunction(a) {
//   let count=0;
//   for (let i = 0; i < a.length; i++) {
//     if(a[i]<0){
//       count += 1;
//     }
//   }
//   return count;
// }
// const op = myFunction([1, -2, 2, -4]);
// console.log(op)
// OR
// return a.filter((el) => el < 0).length;

// function myFunction(arr) {
//     let len = '';
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if(element.length >len.length){
//             len = element
//             console.log(len)
//         }
//     }
//   return len;
// }
// myFunction(['help', 'me'])
// // Expected'help'
// myFunction(['I', 'need', 'candy'])

// function myFunction(a, b) {
// console.log([a]:b);
// }
// myFunction(['a','b','c'],[1,2,3])
// // Expected{a:1,b:2,c:3}

// function myFunction(a, b) {
//   let i = 0;
//   while (i < a.length) {
//     if (a[i] === b) {
//       a.splice(i, 1);
//     } else {
//       ++i;
//     }
//   }
//   return a;
// }
// const output = myFunction([1,2,'2'], '2');
// console.log(output);
// function myFunction( a, b ) {
//     return a.filter(cur => cur !== b)
//   }
// const output = myFunction([1, 2, 3], 2);
// const output1= myFunction([1, 2, "2"], "2");
// const output2 = myFunction([false, "2", 1], false);
// const output3= myFunction([1, 2, "2", 1], 1);
// console.log(output);

// function myFunction(arr) {
// console.log( arr.every((v) => v === arr[0]));
// // }
// myFunction(["test", "test", "test"]);
// // Expected true
// myFunction([1, 1, 1, 2]);
// Expected false

// function myFunction(...arrays) {
//   // console.log([...arrays, ...arrays, ...arrays]) ;
//   // let o=[...arrays,...arrays]
//   let o=[...arrays,...arrays];
//   console.log(o)
// }
// myFunction(["a", "b", "c"], [4, 5, 6]);
// // Expected['a', 'b', 'c', 4, 5, 6]
// myFunction([true, true], [1, 2], ["a", "b"]);
// Expected[true, true, 1, 2, 'a', 'b']

// function myFunction(a, b) {
//   sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//     console.log(0);
//   });
//   console.log([...a, ...b]);
// }
// myFunction([1, 2, 3], [3, 4, 5]);
// // Expected[ 1, 2, 3, 4, 5 ]
// myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]);
// // Expected[ -11, -10, 5, 22, 41,  42, 333]

// function myFunction(arr) {
//   const sum = arr.reduce((a, b) => a + b);
//   const avg = sum / arr.length;
//   return avg;
// }
// OR
// function myFunction( arr ) {
//   return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
//   }
// myFunction([10, 100, 40]);
// // Expected50

// return a.filter((e, i) => i % n === n - 1);
// function myFunction(a, n) {
//   let rest = [...a];
//   let result = [];
//   for (let i = 0; i < a.length; i++) {
//      if (rest.length < n) break;
//     ( result.push(rest[n - 1]))
//      rest = rest.slice(n);
//   }
//   console.log(result) ;
// }
// myFunction([1,2,3,4,5,6,7,8,9,10],3)
// // Expected[3,6,9]
// myFunction([10,9,8,7,6,5,4,3,2,1],5)
// // Expected[6,1]

// function myFunction(min, max) {
//     let arr = [];
//     for (let i = min; i <= max; i++) {
//       arr.push(i);
//     }
//   return arr;
//   }
//   myFunction(1, 3)
// // Expected[1, 2, 3]

// function myFunction(arr) {
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (i===element) {
//         // console.log({key:a})
//     }
// }
//   return;
// }
// myFunction(['Alf', 'Alice', 'Ben'])
// // Expected{ a: ['Alf', 'Alice'], b: ['Ben']}
// myFunction(['Ant', 'Bear', 'Bird'])
// Expected{ a: ['Ant'], b: ['Bear', 'Bird']}

// function myFunction(a, b) {
//   let sum = 0;
//   for (let element of a) {
//     if (element > b) {
//       sum += element;
//     }
//   }
//   return sum;
// }
// const op = myFunction([1, 2, 3, 4, 5, 6, 7], 2);
// console.log(op);



// function myFunction(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[0].b > arr[1].b) {
//       {
//        return  [arr[1], arr[0]];
//       }
//     } else {
//     return  arr;
//     }
//   }
//   return;
// }
// OR
// function myFunction(arr) {
//   const sort = (x, y) => x.b - y.b;
//   return arr.sort(sort);
// }
// const op = myFunction([
//   { a: 2, b: 10 },
//   { a: 5, b: 4 },
// ]);
// console.log(op);
// // Expected[{a:5,b:4},{a:2,b:10}]
// const op2=myFunction([{a:1,b:2},{a:5,b:4}])
// console.log(op2)



function myFunction(a, b) {
  // let mer= a.concat(b)
  let arr = [...a, ...b];
  let un = [...new Set(arr)];
  return un;
}
const op1=myFunction([1, 2, 3], [3, 4, 5])
console.log(op1)
// Expected[ 1, 2, 3, 4, 5 ]
const op2=myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])
console.log(op2)
// Expected[ -11, -10, 5, 22, 41,  42, 333]