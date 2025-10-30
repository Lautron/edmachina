<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const props = withDefaults(
  defineProps<{
    title: string
    percentage: {
      daily: number
      weekly: number
      monthly: number
    }
    chartColor?: string
  }>(),
  {
    chartColor: 'text-destructive',
  },
)

const dropdownOptions = computed(() => Object.keys(props.percentage).map(p => p.charAt(0).toUpperCase() + p.slice(1)))
const selectedPeriod = ref(dropdownOptions.value[0] || 'Weekly')

const radius = 45
const circumference = 2 * Math.PI * radius

const currentPercentage = computed(() => {
  return props.percentage[selectedPeriod.value.toLowerCase() as keyof typeof props.percentage] || 0
})

const strokeDashoffset = computed(() => {
  return circumference - (currentPercentage.value / 100) * circumference
})
</script>

<template>
  <Card class="h-full flex flex-col justify-between gap-2 py-4">
    <CardHeader class="flex flex-row items-center justify-between">
      <CardTitle class="text-base font-medium text-muted-foreground">
        {{ title }}
      </CardTitle>
      <Select v-model="selectedPeriod">
        <SelectTrigger >
          <SelectValue :placeholder="selectedPeriod" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem v-for="option in dropdownOptions" :key="option" :value="option">
            {{ option }}
          </SelectItem>
        </SelectContent>
      </Select>
    </CardHeader>
    <CardContent class='flex-grow flex justify-center items-center px-2'>
      <div class="relative flex size-52 items-center justify-center">
        <svg class="size-full -rotate-90" viewBox="0 0 100 100">
          <circle
            class="text-gray-100 dark:text-gray-800"
            stroke="currentColor"
            stroke-width="6"
            fill="transparent"
            :r="radius"
            cx="50"
            cy="50"
          />
          <circle
            :class="chartColor"
            stroke="currentColor"
            stroke-width="6"
            fill="transparent"
            :r="radius"
            cx="50"
            cy="50"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="strokeDashoffset"
            stroke-linecap="round"
          />
        </svg>
        <span class="absolute text-5xl font-semibold">
          {{ currentPercentage }}%
        </span>
      </div>
    </CardContent>
  </Card>
</template>
