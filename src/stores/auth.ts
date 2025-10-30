import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
 
 export const useAuthStore = defineStore('auth', () => {
   const isLoggedIn = ref(localStorage.getItem('isLoggedIn') === 'true')
   const storedFullName = ref(localStorage.getItem('fullName') || '')
   const storedEmail = ref(localStorage.getItem('email') || '')
   const storedPassword = ref(localStorage.getItem('password') || '')

  function register(fullName: string, email: string, password: string) {
    storedFullName.value = fullName
    storedEmail.value = email
    storedPassword.value = password
    localStorage.setItem('fullName', fullName)
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
  }

  function login(email: string, password: string): boolean {
   // Ensure credentials exist before trying to log in
   if (storedEmail.value && storedPassword.value && email === storedEmail.value && password === storedPassword.value) {
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

  function checkEmailExists(email: string): boolean {
    return email === storedEmail.value && storedEmail.value !== ''
  }

  function resetPassword(email: string, newPassword: string): boolean {
    if (email === storedEmail.value && storedEmail.value !== '') {
      storedPassword.value = newPassword
      localStorage.setItem('password', newPassword)
      return true
    }
    return false
  }


  return { isLoggedIn, login, logout, register, checkEmailExists, resetPassword }
})