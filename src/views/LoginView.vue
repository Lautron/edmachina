<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter, RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Logo from '@/assets/icons/logo.svg'

const authStore = useAuthStore()
const router = useRouter()

const email = ref('')
const password = ref('')
const error = ref('')

function handleLogin() {
  error.value = ''
  const success = authStore.login(email.value, password.value)
  if (success) {
    router.push('/')
  } else {
    error.value = 'Invalid email or password. Please try again.'
  }
}
</script>

<template>
  <div class="flex min-w-screen min-h-screen items-center justify-center bg-gray-100">
    <Card class="w-full max-w-sm">
      <CardHeader class="text-center">
        <div class="mb-4 flex justify-center">
          <img :src="Logo" class="size-12" alt="PetCare Logo" />
        </div>
        <CardTitle class="text-2xl font-bold">
          Welcome to PetCare
        </CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <Input id="email" v-model="email" type="email" placeholder="m@example.com" class="mt-1" />
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <RouterLink to="/forgot-password" class="text-sm text-primary hover:underline">
                Forgot password?
              </RouterLink>
            </div>
            <Input id="password" v-model="password" type="password" class="mt-1" />
          </div>
          <div v-if="error" class="text-sm text-destructive">
            {{ error }}
          </div>
          <Button class="w-full" @click="handleLogin">
            Log In
          </Button>
        </div>
        <div class="mt-6 text-center text-sm">
          Don't have an account?
          <RouterLink to="/register" class="text-primary hover:underline">
            Sign up
          </RouterLink>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
