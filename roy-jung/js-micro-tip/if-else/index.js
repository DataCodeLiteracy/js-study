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

const executeLogin = (where, id) => {
  switch (where) {
    case 'naver':
      return naverLogin(id)
      break
    case 'kakao':
      return kakaoLogin(id)
    case 'facebook':
      return facebookLogin(id)
    case 'google':
      return googleLogin(id)
    default:
      return
  }
}

const socialLogin = (where, id) => {
  const domain = executeLogin(where, id)
  return `${domain} ${id}`
}

console.log(socialLogin('naver', '종현'))
console.log(socialLogin('google', '종현'))
