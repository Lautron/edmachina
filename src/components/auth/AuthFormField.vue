<script setup lang="ts">
import { Input } from '@/components/ui/input'

withDefaults(defineProps<{
  id: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
}>(), {
  type: 'text',
})

const model = defineModel<string>()
</script>

<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <Input :id="id" v-model="model" :type="type" :placeholder="placeholder" class="mt-1" :required="required" />
  </div>
</template>