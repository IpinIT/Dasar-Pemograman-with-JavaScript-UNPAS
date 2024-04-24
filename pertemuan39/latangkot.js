var penumpang = ["ipin", undefined, "stacy"];
var tambahPenumpang = function (nama, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang diawal array
    penumpang.push(nama);
    // kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika kursi kosong
      if (penumpang[i] == undefined) {
        // tambah penumpang dikursi tersebut
        penumpang[i] = nama;
        // kembalikan isi array & keluar dari function
        return penumpang;
        // jika ada nama yang sama
      } else if (penumpang[i] == nama) {
        // tampilkan pesan kesalahanya
        console.log(nama + " sudah ada didalam angkot");
        // kembalikan isi array & keluar dari function
        return penumpang;
        // jika seluruh kursi sudah terisi
      } else if (i == penumpang.length - 1) {
        // tambah penumpang diakhir array
        penumpang.push(nama);
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
};
