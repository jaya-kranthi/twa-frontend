import { env } from './env'

const POOL_URL = `https://cognito-idp.ap-south-1.amazonaws.com`

export async function signIn(username: string, password: string) {
  const res = await fetch(`${POOL_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-amz-json-1.1',
      'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth',
    },
    body: JSON.stringify({
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: env.cognitoClientId,
      AuthParameters: { USERNAME: username, PASSWORD: password },
    }),
  })
  if (!res.ok) throw new Error('Authentication failed')
  return res.json()
}

export async function refreshSession(refreshToken: string) {
  const res = await fetch(`${POOL_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-amz-json-1.1',
      'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth',
    },
    body: JSON.stringify({
      AuthFlow: 'REFRESH_TOKEN_AUTH',
      ClientId: env.cognitoClientId,
      AuthParameters: { REFRESH_TOKEN: refreshToken },
    }),
  })
  if (!res.ok) throw new Error('Token refresh failed')
  return res.json()
}

export function signOut() {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  localStorage.removeItem('id_token')
}
