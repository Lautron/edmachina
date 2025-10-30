<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Logo from '@/assets/icons/logo.svg'

defineProps<{
  title: string
  description?: string
  cardClass?: string
}>()
</script>

<template>
  <div class="flex min-h-screen w-full items-center justify-center bg-gray-100 px-4">
    <Card class="w-full max-w-sm" :class="cardClass">
      <CardHeader class="space-y-1 text-center">
        <img :src="Logo" alt="Logo" class="mx-auto h-12 w-12">
        <CardTitle class="text-2xl font-bold">
          {{ title }}
        </CardTitle>
        <CardDescription v-if="description">
          {{ description }}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <slot />
        <div v-if="$slots.footer" class="mt-6 text-center text-sm">
          <slot name="footer" />
        </div>
      </CardContent>
    </Card>
  </div>
</template>