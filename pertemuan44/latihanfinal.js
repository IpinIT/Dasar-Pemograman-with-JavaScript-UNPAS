function angkot (nama, trayek, penumpang, kas) {
    this.nama = nama;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;
    // function didalam objek disebut method
    this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function (namaPenumpang, bayar) {
        if(this.penumpang.length === 0) {
            alert ('angkot masih kosong');
            return false;
        } for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang [i] == namaPenumpang) {
                this.penumpang [i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}    

var angkot1 = new angkot ('Sandhika Galih', ['Cicaheum', 'Cibiru'], [], 0);
console.log(angkot1);