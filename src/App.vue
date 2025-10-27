<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { SidebarProvider } from '@/components/ui/sidebar'
</script>

<template>
  <SidebarProvider>
    <RouterView />
  </SidebarProvider>
</template>
