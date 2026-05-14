export const env = {
  apiUrl: import.meta.env.VITE_API_URL as string,
  cognitoUserPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID as string,
  cognitoClientId: import.meta.env.VITE_COGNITO_CLIENT_ID as string,
  useMock: import.meta.env.VITE_USE_MOCK === 'true',
} as const
