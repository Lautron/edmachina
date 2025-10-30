<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { RouterLink, useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import AuthLayout from '@/layouts/AuthLayout.vue'
import AuthFormField from '@/components/auth/AuthFormField.vue'

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
    <AuthLayout title="Welcome to PetCare" description="Enter your credentials to access your account">
      <div class="space-y-4">
        <AuthFormField id="email" v-model="email" label="Email" type="email" placeholder="m@example.com" />
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
      <template #footer>
        Don't have an account?
        <RouterLink to="/register" class="text-primary hover:underline">
          Sign up
        </RouterLink>
      </template>
    </AuthLayout>
</template>
