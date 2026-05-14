# Test Plan — ST-F01-01: Login page

## RTL unit tests

- [ ] LoginForm renders email field, password field, submit button
- [ ] Empty submit → Yup validation errors shown inline
- [ ] Invalid email format → Yup error on email field
- [ ] Submit with valid inputs → login action called with { email, password }
- [ ] Loading state → submit button disabled + spinner shown
- [ ] Error response (401) → error message displayed, no token stored

## RTL integration tests (MSW)

- [ ] POST /auth/login 200 { access_token, refresh_token } → auth.store populated → redirect to /dashboard
- [ ] POST /auth/login 200 { mfa_required: true } → MfaChallengeModal shown
- [ ] POST /auth/login 401 → inline error message, form not cleared

## Accessibility

- [ ] axe: no violations on /login page
- [ ] Tab order: email → password → submit
- [ ] Error messages linked via aria-describedby to their input

## Playwright (desktop 1280×800)

- [ ] Navigate to /login → enter credentials → land on /dashboard
- [ ] Invalid credentials → error banner visible

## Playwright (mobile-chrome 375×812)

- [ ] Login form renders without horizontal scroll
- [ ] Virtual keyboard doesn't break layout
