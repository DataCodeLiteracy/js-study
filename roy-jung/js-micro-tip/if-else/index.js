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

const appleLogin = (id) => {
  // 복잡한 과정 생략
  return '애플'
}

const SocialLoginMap = {
  naver: naverLogin,
  kakao: kakaoLogin,
  facebook: facebookLogin,
  google: googleLogin,
  apple: appleLogin
}

const socialLogin = (where, id) => {
  const domain = SocialLoginMap[where](id)
  return `${domain} ${id}`
}

console.log(socialLogin('naver', '종현'))
console.log(socialLogin('google', '종현'))
console.log(socialLogin('apple', '종현'))
