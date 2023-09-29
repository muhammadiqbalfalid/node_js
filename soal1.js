// soal1.js

const shapes = require('./shapes');

const sisiPersegi = 5;
const panjangPersegiPanjang = 6;
const lebarPersegiPanjang = 4;

// Menggunakan modul untuk menghitung luas dan keliling
const luasPersegi = shapes.luasPersegi(sisiPersegi);
const kelilingPersegi = shapes.kelilingPersegi(sisiPersegi);
const luasPersegiPanjang = shapes.luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);
const kelilingPersegiPanjang = shapes.kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);

console.log('Luas Persegi:', luasPersegi);
console.log('Keliling Persegi:', kelilingPersegi);
console.log('Luas Persegi Panjang:', luasPersegiPanjang);
console.log('Keliling Persegi Panjang:', kelilingPersegiPanjang);