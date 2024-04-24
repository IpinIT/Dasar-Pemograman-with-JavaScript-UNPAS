// tanpa function
// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;

// console.log(total);

// membuat dengan function
// function nama_fungsi(parameter){
function jumlah(a,b){
  // deklarasi variabel
  var volumeA;
  var volumeB;
  var total;
// deklarasi fungsinya apa
   volumeA = a * a * a;
   volumeB = b * b * b;
   total = volumeA+volumeB;
  //  return untuk stop fungsinya
  return total;
}
// tampilkan outputnya tinggal panggil fungsinya dan masukan parameter
console.log (jumlah(8,3));
alert (jumlah (8,3));
alert (jumlah(10,15));