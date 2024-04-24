// manipulasi array

// 1. menambah isi array
// var arr = ["a", 1,true];
// console.log(arr[1]);

// var arr = [];
// arr[0] = "ipin";
// arr[1] = "upin";
// arr[2] = "apin";
// console.log(arr);

// 2. menghapus isi array
// var arr =["ipin","upin","apin"];
// arr[1]=undefined;
// console.log(arr)

// 3. menampilkan isi array
// var arr =["ipin","upin","apin","justin"];
// for(i=0; i<arr.length; i++) {
//     console.log('mahasiswa ke-' + (i+1) + ": " + arr[i]);
// }
// length= metod yg berfungsi mengetahui brpa elemnt yg ada pd arr

// 1.join = metod yg menggabungkan seluruh isi array dan mengubahnya jd string
// var arr=["upin", "ipin", "stacy"];
// // menambahkan separator berupa spasi pada join
// console.log(arr.join(' - '));

// 2. push & pop= push=nambah elemn array diakhir array, pop=menghilangkan elemen terakhir dari array
// push bisa sekaligus banyak
// var arr=["upin", "ipin", "stacy"];
// arr.push('opah','kakrose');
// console.log(arr.join(' - '));
// pop harus satu persatu dipop
// var arr=["upin", "ipin", "stacy"];
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift = sperti push tp elemen awal
var arr=["upin", "ipin", "stacy"];
arr.unshift('opah');
console.log(arr.join(' - '));
// shift = seperti pop tp elemen pertama
// var arr=["upin", "ipin", "stacy"];
// arr.shift();
// console.log(arr.join(' - '));
