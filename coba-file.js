// program menghitung hutang
/*
    Deklarasi
jumlahHutang,
    jumlahBayar,
    sisaHutang
*/
// Proses
// baca jumlah hutang
const jumlahHutang = parseInt(prompt("Masukan jumlah hutang"));
// baca jumlah bayar
const jumlahBayar = parseInt(prompt("Masukan jumlahBayar"));
// Hitung sisa hutang
// algoritma
let sisa = jumlahBayar - jumlahHutang;
// tampilkan sisa hutang ke dom
const sisaField = document.getElementById("sisa");
const message = function (lunas) {
  return lunas;
};
//kalo uang bayar lebih gede dari hutang
// kondisi
if (jumlahBayar > jumlahHutang) {
  // output
  sisaField.innerHTML = message(
    `Hutang anda lunas, kembalian = ${sisa} uang anda`
  );
}
//kalo uang bayar sama dengan hutang
else if (jumlahBayar === jumlahHutang) {
  // output
  sisaField.innerHTML = message(`Hutang anda lunas`);
} else {
  // output
  sisaField.innerHTML = message(
    `Hutang anda belum lunas, sisa hutang = ${sisa}`
  );
}
