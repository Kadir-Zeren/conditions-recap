const calismaSuresi = prompt(`calisma suresi`);
let maas = prompt(`maasini giriniz`);

if (calismaSuresi >= 10) {
  maas = maas * 1.1;
  console.log(`zamli maasiniz ${maas}`);
} else {
  console.log(`uzgunuz maasiniza zam yapamiyoruz`);
}
console.log(`gule gule`);
