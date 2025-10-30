<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import AuthLayout from '@/layouts/AuthLayout.vue'
import AuthFormField from '@/components/auth/AuthFormField.vue'

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
    <AuthLayout
      title="Forgot Password"
      :description="stage !== 'success' ? 'Enter your email to receive a password reset link.' : undefined"
      card-class="max-w-md"
    >
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
        <AuthFormField id="email" v-model="email" label="Email" type="email" placeholder="m@example.com" required />
        <Button class="w-full" type="submit">
          Continue
        </Button>
      </form>
  
      <!-- Password Reset Stage -->
      <form v-if="stage === 'resetPassword'" class="space-y-4" @submit.prevent="handlePasswordReset">
        <p class="text-sm text-center text-muted-foreground">Enter a new password for {{ email }}</p>
        <AuthFormField id="newPassword" v-model="newPassword" label="New Password" type="password" required />
        <AuthFormField id="confirmPassword" v-model="confirmPassword" label="Confirm New Password" type="password" required />
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
    </AuthLayout>
</template>