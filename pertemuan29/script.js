// // parameter function
// function tambah (a,b){
//     return a+b;
// }
// // argument function (5 masuk ke parameter a, 10 masuk ke parameter b)
// // ubah nilai string jd INT =parseInt()
// var a = parseInt (prompt ('masukan nilai a :'));
// var b = parseInt (prompt ('masukan nilai b :'));
// var hasil = tambah(a*2,b*2);
// alert(hasil);

// jika parameter lebih sedikit dari argumen, maka nilai argument terakhir akan diabakaikan.
// jika parameter lbh banyak dari argument, kelebihanya akan diisi dengan nilai undefined
// function tambah(a,b){
//     return a+b;
// }
// function kali (a,b){
//     return a*b;
// }
// var hasil = kali(tambah(1,2), tambah(3,4));
// console.log(hasil);

function tambah(){
    var hasil = 0;
    for(var i=0; i<arguments.length; i++){
            hasil += arguments[i];
        }
        return hasil;
}

var coba = tambah(1,2,3,4);
console.log(coba);