<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { RouterLink, useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import AuthLayout from '@/layouts/AuthLayout.vue'

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
        <div>
          <label for="fullName" class="block text-sm font-medium text-gray-700">Full Name</label>
          <Input id="fullName" v-model="fullName" type="text" placeholder="John Doe" class="mt-1" />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <Input id="email" v-model="email" type="email" placeholder="m@example.com" class="mt-1" />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <Input id="password" v-model="password" type="password" class="mt-1" />
        </div>
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
