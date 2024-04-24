var NoAngkot=1;
var AngkotBeroprasi=6;
var JmlhAngkot=10;
// operator === adalah indetitas, artinya membandingkan data dan tipe data
// operator == untuk perbandingan saja
for(NoAngkot=1; NoAngkot<=10; NoAngkot++){
    // operator logika && jd smua kondisi hrs terpenuhi biar true
    if(NoAngkot<=AngkotBeroprasi && NoAngkot!==5 ){
        console.log('Angkot No. '+NoAngkot+' beroprasi dengan baik')
        // operato ||=untuk atau
    } else if(NoAngkot === 8 || NoAngkot ===10 || NoAngkot===5){
        console.log('Angkot No. '+NoAngkot+' sedang lembur')
    }else {
    console.log('Angkot No. '+NoAngkot+' tidak beroprasi dengan baik')
}
}