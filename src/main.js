import './style.css'

const AUTH_KEY = 'vraj_demo_auth'

const form = document.getElementById('login-form')
const createBtn = document.getElementById('create-account')

form?.addEventListener('submit', (e) => {
  e.preventDefault()
  const email = /** @type {HTMLInputElement} */ (document.getElementById('email'))
  const password = /** @type {HTMLInputElement} */ (document.getElementById('password'))
  if (!email?.value.trim() || !password?.value) {
    window.alert('Please enter email or phone and password.')
    return
  }
  sessionStorage.setItem(AUTH_KEY, JSON.stringify({ email: email.value.trim() }))
  window.location.assign(new URL('dashboard/', window.location.href))
})

createBtn?.addEventListener('click', () => {
  window.alert('This is a static demo — sign up is not connected.')
})
