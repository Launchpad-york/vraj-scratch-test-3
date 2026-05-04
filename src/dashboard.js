import './style.css'

const AUTH_KEY = 'vraj_demo_auth'

function readSession() {
  try {
    const raw = sessionStorage.getItem(AUTH_KEY)
    if (!raw) return null
    const data = JSON.parse(raw)
    return typeof data?.email === 'string' && data.email.trim() ? data : null
  } catch {
    return null
  }
}

function redirectHome() {
  window.location.replace(new URL('index.html', window.location.href))
}

const session = readSession()
if (!session) {
  redirectHome()
} else {
  const userEl = document.getElementById('dashboard-user')
  if (userEl) userEl.textContent = session.email
}

document.getElementById('logout-btn')?.addEventListener('click', () => {
  sessionStorage.removeItem(AUTH_KEY)
  redirectHome()
})
