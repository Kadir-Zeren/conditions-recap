const calismaSuresi = prompt(`calisma suresi`);
let maas = prompt(`maasini giriniz`);

if (calismaSuresi >= 10) {
  maas = Math.round(maas * 1.1);
  console.log(`zamli maasiniz ${maas}`);
} else {
  console.log(`uzgunuz maasiniza zam yapamiyoruz`);
}
console.log(`gule gule`);

if (calismaSuresi >= 10) {
  maas = Math.round(maas * 1.1);
  console.log(`zamli maasiniz ${maas}`);
}

const grade = prompt(`please enter your grade:`);

let result = ``;
if (grade < 0) {
  console.log(`grade can not be small than zero`);
} else if (grade < 40) {
  result = `ff`;
} else if (grade <= 50) {
  result = `dd`;
} else if (grade <= 65) {
  result = `cc`;
} else if (grade <= 89) {
  result = `bb`;
} else if (grade <= 100) {
  result = `aa`;
} else {
  console.log(`grade ca not be bigger than 100`);
}

if (result != ``) {
  console.log(`your score:${result}`);
}
