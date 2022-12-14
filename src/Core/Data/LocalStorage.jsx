const identifier = ['theme', 'accessToken']

const [ theme, accesstoken ] = identifier
export function setThemeGlobal(value) {
    localStorage.setItem(theme, value)
}

export function getAccessToken() {
  return localStorage.getItem(accesstoken)
}

export function putAccessToken(accessToken) {
  return localStorage.setItem(accesstoken, accessToken)
}