<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper my-10">
    <nav>
      <RouterLink to="/login" class="px-4 py-2 border border-gray-300 rounded mr-2">Login</RouterLink>
      <RouterLink to="/register" class="px-4 py-2 border border-gray-300 rounded mr-2">Register</RouterLink>
      <RouterLink to="/forgot-password" class="px-4 py-2 border border-gray-300 rounded mr-2">Forgot Password</RouterLink>
      <RouterLink to="/" class="px-4 py-2 border border-gray-300 rounded">Dashboard</RouterLink>
    </nav>
    </div>
  </header>

  <RouterView />
</template>
