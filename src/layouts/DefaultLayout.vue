<script setup lang="ts">
import TheSidebar from '@/components/TheSidebar.vue'
import { SidebarInset } from '@/components/ui/sidebar'
</script>

<template>
  <TheSidebar />
  <SidebarInset>
    <main class="flex-1 overflow-y-auto">
      <router-view />
    </main>
  </SidebarInset>
</template>
