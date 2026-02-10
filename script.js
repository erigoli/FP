const authScreen = document.getElementById('auth-screen');
const appScreen = document.getElementById('app-screen');
const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const nameField = document.getElementById('name-field');
const submitAuth = document.getElementById('submit-auth');
const loginOnlyOptions = document.getElementById('login-only-options');
const authForm = document.getElementById('auth-form');
const logoutBtn = document.getElementById('logout-btn');

let isLogin = true;

function renderAuthMode() {
  loginTab.classList.toggle('is-active', isLogin);
  signupTab.classList.toggle('is-active', !isLogin);
  nameField.classList.toggle('hidden', isLogin);
  loginOnlyOptions.classList.toggle('hidden', !isLogin);
  submitAuth.textContent = isLogin ? 'Log In' : 'Sign Up';
  document.getElementById('name').required = !isLogin;
}

loginTab.addEventListener('click', () => {
  isLogin = true;
  renderAuthMode();
});

signupTab.addEventListener('click', () => {
  isLogin = false;
  renderAuthMode();
});

authForm.addEventListener('submit', (event) => {
  event.preventDefault();
  authScreen.classList.add('hidden');
  appScreen.classList.remove('hidden');
});

logoutBtn.addEventListener('click', () => {
  appScreen.classList.add('hidden');
  authScreen.classList.remove('hidden');
  authForm.reset();
  isLogin = true;
  renderAuthMode();
});

renderAuthMode();
