import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(localStorage.getItem('isLoggedIn') === 'true')

  const storedEmail = ref(localStorage.getItem('email') || 'user@example.com')
  const storedPassword = ref(localStorage.getItem('password') || 'password123')

  if (!localStorage.getItem('email')) {
    localStorage.setItem('email', storedEmail.value)
  }
  if (!localStorage.getItem('password')) {
    localStorage.setItem('password', storedPassword.value)
  }

  function login(email: string, password: string): boolean {
    if (email === storedEmail.value && password === storedPassword.value) {
      isLoggedIn.value = true
      return true
    }
    return false
  }

  function logout() {
    isLoggedIn.value = false
  }

  watch(isLoggedIn, (newValue) => {
    localStorage.setItem('isLoggedIn', String(newValue))
  })

  return { isLoggedIn, login, logout }
})