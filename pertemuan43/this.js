// this =sebuah keywoard special yang scra otomatis didefinisikan pd setiap function




//  membuat objek
// 1. function declaration
// function halo(){
//     console.log(this);
//     console.log('hai');
// }
// this.halo();
// this mengembalikan object scra global

// 2. object literal
// var obj = {a : 10, nama : 'ipin'};
// obj.halo = function (){
//     console.log(this);
//     console.log('hai');
// }
// obj.halo();
// this mengembalikan objek yg bersangkutan

// 3. constructor (new)
function Hallo () {
    console.log(this);
    console.log('hai');
}
var obj1 = new Hallo ();
var obj2 = new Hallo ();
// this mengembalikan objek new hallo yg baru dibuat