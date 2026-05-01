import './style.css'

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
  window.alert('This is a static demo — no data is sent.')
})

createBtn?.addEventListener('click', () => {
  window.alert('This is a static demo — sign up is not connected.')
})
