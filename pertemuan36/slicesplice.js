// slice=digunakan ketika kita ingin ambil beberapa bagian array jd array baru
// var arr=["upin", "ipin", "stacy"];
// arr.slice();
// console.log(arr.join(' - '));

// splice=menyisipkan elemen ditengah
// rumus = splice(tmpt index ditempatin, maudihapus brp, elemenBaru1,elemenBarun...)
// var arr=["upin", "ipin", "stacy"];
// arr.splice(2,0,"dimas",'fitri');
// console.log(arr.join(' - '));

// slice rumus = slice(awal,akhir);
var arr=["upin", "ipin", "stacy","gunawan","sutesi"];
// index awal terbawa, index akhir dikruangi 1
var arr2 = arr.slice(1,3);
console.log(arr.join(" - "));
console.log(arr2.join(" - "));