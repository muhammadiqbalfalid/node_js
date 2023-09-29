const fs = require('fs');
const https = require('https');

const url = 'https://gist.githubusercontent.com/RezaNurRochmat13/291dcd64a10ff8c19f6b8b74107c85e2/raw/9d42c4c26ac6f3d783f8ae0b35af8b8d574a54ca/homework.log';

https.get(url, (response) => {
  if (response.statusCode !== 200) {
    console.error('Gagal mengambil data dari URL:', response.statusCode);
    return;
  }

  let data = '';

  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {
    fs.writeFile('log.txt', data, (err) => {
      if (err) {
        console.error('Gagal menulis ke file log.txt:', err);
      } else {
        console.log('Data berhasil disimpan ke dalam file log.txt.');
      }
    });
  });
}).on('error', (error) => {
  console.error('Terjadi kesalahan:', error);
});
