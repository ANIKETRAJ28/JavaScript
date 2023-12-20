function test() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function excel() {
      console.log(`i: ${i}`);
    }, i * 1000);
  }
}

test();

// function test() {
//   for (var i = 0; i < 3; i++) {
//     let j = i;
//     setTimeout(function excel() {
//       console.log(`j: ${j}`);
//     }, j * 1000);
//   }
// }

// test();

// function test() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(function excel() {
//       console.log(`i: ${i}`);
//     }, i * 1000);
//   }
// }

// test();
