// menu.js
const { kalkulator } = require('./rumus.js');
const readline = require('readline');

// Membuat interface untuk input dari terminal
const inputUser = readline.createInterface({
input: process.stdin,
output: process.stdout
});

// Minta input dari pengguna
inputUser.question('Masukkan angka pertama: ', angka1 => {
    inputUser.question('Masukan angka kedua: ', angka2 => {
        inputUser.question('Masukkan operator (+, -, *, /): ', operator => {
            console.log(`Hasil: ${kalkulator(parseFloat(angka1), parseFloat(angka2), operator)
            }`);
            inputUser.close();
        })
    })
});