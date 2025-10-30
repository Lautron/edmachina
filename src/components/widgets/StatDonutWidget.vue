<script setup lang="ts">
import { computed } from 'vue'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const props = withDefaults(
  defineProps<{
    title: string
    percentage: number
    chartColor?: string
    dropdownOptions?: string[]
  }>(),
  {
    chartColor: 'text-primary', // Default color
    dropdownOptions: () => ['Daily', 'Weekly', 'Monthly'],
  },
)

const radius = 45
const circumference = 2 * Math.PI * radius

const strokeDashoffset = computed(() => {
  return circumference - (props.percentage / 100) * circumference
})

const selectedDropdownValue = computed({
  get: () => props.dropdownOptions[0],
  set: () => {},
})
</script>

<template>
  <Card class="h-full flex flex-col justify-between gap-2 py-4">
    <CardHeader class="flex flex-row items-center justify-between">
      <CardTitle class="text-base font-medium text-muted-foreground">
        {{ title }}
      </CardTitle>
      <Select v-model="selectedDropdownValue">
        <SelectTrigger class="h-auto w-auto border-none bg-transparent p-0 shadow-none focus:ring-0">
          <SelectValue :placeholder="selectedDropdownValue" />
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
          {{ percentage }}%
        </span>
      </div>
    </CardContent>
  </Card>
</template>
