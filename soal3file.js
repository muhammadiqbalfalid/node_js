const fs = require('fs');

const sourceFilePath = 'homework.log';
const destinationFilePath = 'log.txt';

fs.readFile(sourceFilePath, 'utf8', (err, data, ) => {
  if (err) {
    console.error('Gagal membaca file sumber:', err);
    return;
  }

  fs.writeFile(destinationFilePath, data, (err) => {
    if (err) {
      console.error('Gagal menulis ke file log.txt:', err);
    } else {
      console.log('Data berhasil disimpan ke dalam file log.txt.');
    }
  });
});
