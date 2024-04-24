// membuat objek
// 1. object literal
var mhs1 = {
    // key : values1, ... , valuesn,
    nama : "ipin",
    nim : 32220100,
    email : "ipingunawan.ig@gmail.com",
    jurusan : "informatika"
}

var mhs2 = {
    // key : values1, ... , valuesn,
    nama : "stacy",
    nim : 32220440,
    email : "stacy.ig@gmail.com",
    jurusan : "art"
}

// objek fucntion declaration
// var dan return harus buat sndri
function buatObjectMhs (nama, nim, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}
var mhs3 = buatObjectMhs("upin", 322205000, "upin@gmail.com", "accounting");

var mhs4 = buatObjectMhs("rose", 322207000, "rose@gmail.com", "manajemen");

// buat objek dengan constructor
// nama function awali huruf awal besar
function Mahasiswa (nama, nim, email, jurusan){
    // var this = {};
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}
// wajib pakai new
var mhs5 = new Mahasiswa ("opah", 322203000, "opah@gmail.com", "english");
console.log(mhs5);
