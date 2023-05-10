console.log('hello World!');

function getToken(aaaa) {
  const result = String(Math.floor(Math.random() * 10 ** aaaa)).padStart(
    aaaa,
    '0'
  );
  console.log(result);
}

getToken(3);
