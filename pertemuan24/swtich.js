var angka = prompt('masukan angka :');
switch(angka){
    // memkai kutip karna angka yg masuk lewat prompt otomatis disimpan menjadi string
    case '1' :
        alert('anda memasukan angka 1');
        break;
    case '2' :
        alert('anda memasukan angka 2');
        break;
    case '3' :
        alert('anda memasukan angka 3');
        break;
        // default selain yg di case
    default :
        alert('angka yang anda masukan salah!');
        break;
}