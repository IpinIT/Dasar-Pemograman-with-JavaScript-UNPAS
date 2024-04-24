// filter mengembalikan bnyk nilai
// var angka = [1,2,10,5,20,3,6,8,4];
// var angka2 = angka.filter(function (x){
//     return x > 7;
// });
// console.log(angka2.join(' - '));

// find = mengembalikan 1 nilai
var angka = [1,2,10,5,20,3,6,8,4];
var angka2 = angka.find(function (x){
    return x == 5;
});
console.log(angka2);