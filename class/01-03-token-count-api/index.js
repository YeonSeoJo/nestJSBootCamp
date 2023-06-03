console.log('hello World!');

function createTokenOfPhone(myPhone) {
  // 1. 휴대폰번호 자릿수 맞는지 확인하기
  if (myPhone.length !== 10 && myPhone.length !== 11) {
    console.log('에러발생! 핸드폰 번호를 제대로 입력해 주세요!');
    return;
  }

  //2. 핸드폰 토큰 6자리 만들기
  const aaaa = 6;
  if (aaaa === undefined) {
    console.log('error, 갯수를 제대로 입력하세요');
    return;
  } else if (aaaa <= 0) {
    console.log('error, 갯수가 너무 적습니다.');
    return;
  } else if (aaaa > 10) {
    console.log('error, 갯수가 너무 많습니다.');
    return;
  }

  const result = String(Math.floor(Math.random() * 10 ** aaaa)).padStart(
    aaaa,
    '0'
  );
  console.log(result);
}

getToken(3);
