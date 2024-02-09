// const calismaSuresi = prompt(`calisma suresi`);
// let maas = prompt(`maasini giriniz`);

// if (calismaSuresi >= 10) {
//   maas = Math.round(maas * 1.1);
//   console.log(`zamli maasiniz ${maas}`);
// } else {
//   console.log(`uzgunuz maasiniza zam yapamiyoruz`);
// }
// console.log(`gule gule`);

// if (calismaSuresi >= 10) {
//   maas = Math.round(maas * 1.1);
//   console.log(`zamli maasiniz ${maas}`);
// }

// const grade = prompt(`please enter your grade:`);

// let result = ``;
// if (grade < 0) {
//   console.log(`grade can not be small than zero`);
// } else if (grade < 40) {
//   result = `ff`;
// } else if (grade <= 50) {
//   result = `dd`;
// } else if (grade <= 65) {
//   result = `cc`;
// } else if (grade <= 89) {
//   result = `bb`;
// } else if (grade <= 100) {
//   result = `aa`;
// } else {
//   console.log(`grade ca not be bigger than 100`);
// }

// if (result != ``) {
//   console.log(`your score:${result}`);
// }

// if (result) {
//   console.log(`your score:${result}`);
// }

// const n1 = +prompt(`num1:`);
// const n2 = +prompt(`num2:`);
// const n3 = +prompt(`num3:`);

// if (n1 > n2) {
//   if (n1 > n3) {
//     console.log(`biggest: ${n1}`);
//   }
// }

// if (n1 >= n2 && n1 >= n3) {
//   console.log(`biggest: ${n1}`);
// } else if (n2 >= n1 && n2 >= n3) {
//   console.log(`biggest: ${n2} `);
// } else if (n3 >= n1 && n3 >= n2) {
//   console.log(`biggest: ${n3} `);
// }

// let biggest = n1;

// if (n2 >= biggest) {
//   biggest = n2;
// }
// if (n3 >= biggest) {
//   biggest = n3;
// }
// console.log(`${biggest} is biggest`);

// const grade1 = prompt(`please enter your grade:`);

// grade1 >= 50 ? console.log(`succeed`) : console.log(`failed`);

// const score = grade1 >= 50 ? `passed` : `Failed`;
// console.log(score);

// const score1 = grade1 >= 50 ? `suucced: ` : ``;
// console.log(score1);

// const speed = 110;
// speed > 120
//   ? console.log(`speedy`)
//   : speed >= 90
//   ? console.log(`normal`)
//   : console.log(`low speed`);

// if (speed > 120) {
//   console.log(`speedy`);
// } else if (speed >= 90) {
//   console.log(`normal`);
// } else {
//   console.log(`low speed`);
// }

const age = 16;

let description = ``;
if (age >= 18) {
  description = `adult`;
}

description = age >= 18 ? `adult` : ``;

age >= 18 && (description = `adult`);

age >= 18 || (description = `young`);

console.log(description);
