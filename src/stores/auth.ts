import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(localStorage.getItem('isLoggedIn') === 'true')

  function login() {
    isLoggedIn.value = true
  }

  function logout() {
    isLoggedIn.value = false
  }

  watch(isLoggedIn, (newValue) => {
    localStorage.setItem('isLoggedIn', String(newValue))
  })

  return { isLoggedIn, login, logout }
})