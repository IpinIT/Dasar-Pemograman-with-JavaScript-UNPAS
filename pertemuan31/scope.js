// global scope/window scope
var a = 1;
// pada function bisa akes var global
// variabel local
function tes(a){
    console.log(a);
}
// akan mengacu ke var a global
tes (a);
console.log(a);