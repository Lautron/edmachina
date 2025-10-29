<script setup lang="ts">
import { Card } from '@/components/ui/card'
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="h-16 bg-card px-4 shadow-sm"></div>
    <div class="grid grid-cols-1 gap-4 px-4 pb-4 lg:grid-cols-5">
      <!-- Left Section -->
      <div class="flex flex-col gap-4 lg:col-span-3">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card class="h-48" />
          <Card class="h-48" />
          <Card class="h-48" />
        </div>
        <Card class="h-96" />
      </div>

      <!-- Right Section -->
      <div class="flex flex-col gap-4 lg:col-span-2">
        <Card class="h-80" />
        <Card class="flex-1" />
      </div>
    </div>
  </div>
</template>


