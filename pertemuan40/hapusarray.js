var penumpang = [];
var hapusPenumpang = function (nama, penumpang){
    // jika angkot kosong
    if (penumpang.length == 0){
        // tampilkan pesan bahwa angkot kosong
        console.log("angkot masih kosong");
        return penumpang;
    }else{
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++){
            // jika nama penumpang ditemukan
            if(penumpang[i] == nama){
                // hapus penumpang dengan mengubah namanya menjadi undefined
                penumpang[i] = undefined;
                // kembalikan isi array & keluar dari function
                return penumpang;
            }else if (i == penumpang.length -1) {
                // tampilkan pesan bahwa penumpang tidak ditemukan
                console.log("penumpang tidak ditemukan");
                return penumpang;
            }
        }
    }
}