// foreach = tidak bisa mengembalikan nilai array
// var angka= [1,2,3,4,5,6,7,8];
// var nama = ["ipin", "adih", "stacy"];
// for(var i=0; i<angka.length; i++){
//     console.log(angka[i]);
// }

// funtion expression
// e = elem(value array)
// angka.forEach(function(e){
//     console.log(e);
// });
// nama.forEach(function(e, i){
//     console.log('Mahasiswa Ke- ' + (i+1) + ' adalah : ' + e);
// })

// map = bisa mengembalikan array (return)
// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.map(function(e){
//     return e*2;
// });
// console.log(angka2.join (' - '));

// sort = mengurutkan isi array
var angka = [1,2,5,3,6,8,4];
// blm diurutkan
console.log(angka.join (' - '));
// sudah diurutkan setlh pakai sort
angka.sort();
console.log(angka.join (' - '));