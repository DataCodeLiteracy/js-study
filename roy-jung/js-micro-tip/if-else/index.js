const naverLogin = (id) => {
  // 복잡합 과정 생략
  return '네이버'
}

const kakaoLogin = (id) => {
  // 복잡합 과정 생략
  return '카카오'
}

const facebookLogin = (id) => {
  // 복잡합 과정 생략
  return '페이스북'
}

const googleLogin = (id) => {
  // 복잡합 과정 생략
  return '구글'
}

const socialLogin = (where, id) => {
  let domain
  if (where === 'naver') {
    domain = naverLogin(id)
  } else if (where === 'kakao') {
    domain = kakaoLogin(id)
  } else if (where === 'facebook') {
    domain = facebookLogin(id)
  } else if (where === 'google') {
    domain = googleLogin(id)
  }
  return `${domain} ${id}`
}

console.log(socialLogin('naver', '종현'))
console.log(socialLogin('google', '종현'))
