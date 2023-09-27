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
  switch (where) {
    case 'naver':
      domain = naverLogin(id)
      break
    case 'kakao':
      domain = kakaoLogin(id)
      break
    case 'facebook':
      domain = facebookLogin(id)
      break
    case 'google':
      domain = googleLogin(id)
      break
    default:
      return
  }
  return `${domain} ${id}`
}

console.log(socialLogin('naver', '종현'))
console.log(socialLogin('google', '종현'))
