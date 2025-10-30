<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Logo from '@/assets/icons/logo.svg'

type Stage = 'enterEmail' | 'resetPassword' | 'success'

const authStore = useAuthStore()

const stage = ref<Stage>('enterEmail')
const email = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const error = ref('')
const passwordResetSuccess = ref(false)

function handleEmailSubmit() {
  error.value = ''
  if (authStore.checkEmailExists(email.value)) {
    stage.value = 'resetPassword'
  }
  else {
    // To prevent user enumeration, show a generic success message
    // even if the email doesn't exist.
    stage.value = 'success'
  }
}

function handlePasswordReset() {
  error.value = ''
  if (newPassword.value !== confirmPassword.value) {
    error.value = 'Passwords do not match. Please try again.'
    return
  }
  if (!newPassword.value) {
    error.value = 'Password cannot be empty.'
    return
  }

  const success = authStore.resetPassword(email.value, newPassword.value)
  if (success) {
    passwordResetSuccess.value = true
    stage.value = 'success'
  }
  else {
    error.value = 'An unexpected error occurred. Please try again.'
  }
}
</script>

<template>
  <div class="flex min-w-screen  items-center justify-center bg-gray-100 px-4">
    <Card class="w-full max-w-md">
      <CardHeader class="space-y-1 text-center">
        <img :src="Logo" alt="Logo" class="mx-auto h-12 w-12">
        <CardTitle class="text-2xl font-bold">
          Forgot Password
        </CardTitle>
        <CardDescription v-if="stage !== 'success'">
          Enter your email to receive a password reset link.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <!-- Success Stage -->
        <div v-if="stage === 'success'" class="space-y-4 text-center">
          <p v-if="passwordResetSuccess" class="text-sm">
            Your password has been reset successfully.
          </p>
          <p v-else class="text-sm">
            If an account with that email exists, instructions to reset your password have been sent.
          </p>
          <RouterLink to="/login" class="inline-block text-primary hover:underline">
            Return to Log In
          </RouterLink>
        </div>

        <!-- Email Entry Stage -->
        <form v-if="stage === 'enterEmail'" class="space-y-4" @submit.prevent="handleEmailSubmit">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <Input id="email" v-model="email" type="email" placeholder="m@example.com" class="mt-1" required />
          </div>
          <Button class="w-full" type="submit">
            Continue
          </Button>
        </form>

        <!-- Password Reset Stage -->
        <form v-if="stage === 'resetPassword'" class="space-y-4" @submit.prevent="handlePasswordReset">
          <p class="text-sm text-center text-muted-foreground">Enter a new password for {{ email }}</p>
          <div>
            <label for="newPassword" class="block text-sm font-medium text-gray-700">New Password</label>
            <Input id="newPassword" v-model="newPassword" type="password" class="mt-1" required />
          </div>
          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm New Password</label>
            <Input id="confirmPassword" v-model="confirmPassword" type="password" class="mt-1" required />
          </div>
          <div v-if="error" class="text-sm text-destructive">
            {{ error }}
          </div>
          <Button class="w-full" type="submit">
            Reset Password
          </Button>
          <div class="text-center text-sm">
            <RouterLink to="/login" class="text-primary hover:underline">
              Back to Log In
            </RouterLink>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
</template>