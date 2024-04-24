// objek berupa literal
// objek = kumpulan nilai yang memiliki nama
// objek = adalah array tapi lebih sakti
// var orang {
//     // value dari variabel di objek disebut properti
//     nama : 'ipin',
//     umur : 25,
//     pekerjaan : 'IT',
//     // function didalam objek disebut method
//     sapa : function () {
//         return 'Hi, nama saya ' +this.nama + ' usia saya ' + this.umur + ' tahun, dan saya adalah seorang ' + this.pekerjaan;
//     }
// }

var lang = {
    nama : ["C++", "Python", "JS"],
    mhs : "dodid",
    umur :25,
    skill : ["mudah", "lumayan", "sulit"],
    // objek dalam objek
    compiler : {
        python : "pythonn",
        c : "dev c++",
        js : "VS code"
    }
};
console.log(lang.nama[1]);
console.log(lang.compiler.c);
console.log(lang["compiler"]["js"]);
console.log(lang.umur);