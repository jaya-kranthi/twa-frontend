import { http, HttpResponse } from 'msw'

export const handlers = [
  http.post('*/InitiateAuth', () =>
    HttpResponse.json({
      AuthenticationResult: {
        AccessToken: 'mock-access-token',
        RefreshToken: 'mock-refresh-token',
        IdToken: 'mock-id-token',
      },
    }),
  ),

  http.get('*/api/v1/me', () =>
    HttpResponse.json({
      id: 'user-1',
      email: 'john@acme.com',
      name: 'John Doe',
      role: 'subscriber',
      orgId: 'org-1',
      orgName: 'Acme Weather Co.',
      plan: 'professional',
      lastLogin: new Date().toISOString(),
    }),
  ),

  http.get('*/api/v1/datasets', () =>
    HttpResponse.json({
      data: [],
      total: 0,
      page: 1,
      pageSize: 20,
    }),
  ),

  http.get('*/api/v1/health', () =>
    HttpResponse.json({ status: 'ok', timestamp: new Date().toISOString() }),
  ),
]
