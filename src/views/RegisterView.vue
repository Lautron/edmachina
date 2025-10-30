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

const fullName = ref('')
const email = ref('')
const password = ref('')

function handleRegister() {
  authStore.register(fullName.value, email.value, password.value)
  router.push('/login')
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
          Create an Account
        </CardTitle>
        <CardDescription>
          Enter your details to get started
        </CardDescription>
      </CardHeader>
      <CardContent>
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
        <div class="mt-6 text-center text-sm">
          Already have an account?
          <RouterLink to="/login" class="text-primary hover:underline">
            Log in
          </RouterLink>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
