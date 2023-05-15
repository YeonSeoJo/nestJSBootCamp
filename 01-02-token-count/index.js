console.log('hello World!');

function getToken(aaaa) {
  if (aaaa === undefined) {
    console.log('error, 갯수를 제대로 입력하세요');
    return;
  }

  const result = String(Math.floor(Math.random() * 10 ** aaaa)).padStart(
    aaaa,
    '0'
  );
  console.log(result);
}

getToken(3);
