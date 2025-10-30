<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'

const authStore = useAuthStore()
const router = useRouter()

function handleLogin() {
  authStore.login()
  router.push('/')
}
</script>

<template>
  <div class="login">
    <h1>Login Page</h1>
    <Button @click="handleLogin">Log In</Button>
  </div>
</template>