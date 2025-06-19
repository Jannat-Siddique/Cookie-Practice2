# Cookie-Practice2

User logs in using /login

The backend sets a session cookie in the response (e.g., with res.cookie(...))

Frontend sends that cookie automatically on every request via Axios

Backend checks the cookie on protected routes (like /auth-status, /dashboard)

On logout, the cookie is cleared (session ends)
