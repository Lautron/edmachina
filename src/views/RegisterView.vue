<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { RouterLink, useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import AuthLayout from '@/layouts/AuthLayout.vue'
import AuthFormField from '@/components/auth/AuthFormField.vue'

const authStore = useAuthStore()
const router = useRouter()

const fullName = ref('')
const email = ref('')
const password = ref('')

function handleRegister() {
  authStore.register(fullName.value, email.value, password.value)
  router.push('/login')
}
</script>

<template>
    <AuthLayout title="Create an Account" description="Enter your details to get started">
      <div class="space-y-4">
        <AuthFormField id="fullName" v-model="fullName" label="Full Name" placeholder="John Doe" />
        <AuthFormField id="email" v-model="email" label="Email" type="email" placeholder="m@example.com" />
        <AuthFormField id="password" v-model="password" label="Password" type="password" />
        <Button class="w-full" @click="handleRegister">
          Sign Up
        </Button>
      </div>
      <template #footer>
        Already have an account?
        <RouterLink to="/login" class="text-primary hover:underline">
          Log in
        </RouterLink>
      </template>
    </AuthLayout>
</template>
