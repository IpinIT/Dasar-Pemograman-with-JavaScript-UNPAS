var tanya = true;
while (tanya){
    // menangkap pilihan player
        var p = prompt('Pilih angka dari 1-10 !');
    // menangkap pilihan computer
    // membangkitkan bilangan random
        var angka = Math.random() * 11;
        var hasil = '';
    // menentukan rules
        if(p == angka){
            hasil = 'Selamat anda benar !';
        }else if (p > angka){
        // hasil= (cek dlu comp plh org,) jika true kluar menang, false keluar kalah
        hasil = (angka < p) ? 'Angka terlalu rendah, coba lagi!' : (angka > p ) ? 'Angka terlalu tinggi, coba lagi!' : 'selamat angka yang ada pilih benar!';
    // tampilkan hasilnya
    alert ('Kamu memilih angka ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : ' + hasil);
    tanya = confirm ('Main lagi?');

}
    alert ('Terimakasih sudah bermain !')
}