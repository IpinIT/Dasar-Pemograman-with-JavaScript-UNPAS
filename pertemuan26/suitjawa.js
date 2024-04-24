var tanya = true;
while (tanya){
    // menangkap pilihan player
        var p = prompt('Pilih : gajah, semut, orang');
    // menangkap pilihan computer
    // membangkitkan bilangan random
        var comp = Math.random();

        if(comp < 0.34){
            comp = 'gajah';
        } else if(comp >=0.34 && comp <0.67){
            comp = 'orang';
        } else {
            comp = 'semut';
        }
        
        var hasil = '';
    // menentukan rules, cek pilihan kita dulu baru cek plihan komputer
        if(p == comp){
            hasil = 'seri!';
        }else if (p == 'gajah'){

        //     if(comp == 'orang'){
        //         hasil ='Menang!';
        //     }else{
        //         hasil = 'Kalah!';
        //     }
        // }else if(p == 'orang'){
        //     if (comp == 'gajah'){
        //         hasil = 'Kalah!';
        //     }else{
        //         hasil = 'Menang!';
        //     }
        // }

        // hasil= (cek dlu comp plh org,) jika true kluar menang, false keluar kalah
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';

        }else if(p == 'orang') {
            hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
        }else if (p == 'semut'){
            hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
        }else{
            hasil = 'Kamu memilih pilihan yang salah !!!';
        }

    // tampilkan hasilnya
        alert ('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : ' + hasil);
    tanya = confirm ('Main lagi?');
}
    alert ('Terimakasih sudah bermain !')