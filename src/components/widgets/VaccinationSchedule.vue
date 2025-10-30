<script setup lang="ts">
import { Search } from 'lucide-vue-next'
import { onMounted, ref, computed } from 'vue'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { getVaccinations, type Vaccination } from '@/api/mock'

const vaccinations = ref<Vaccination[]>([])
const sortBy = ref('by-type')
const loading = ref(true)
onMounted(async () => {
  vaccinations.value = await getVaccinations()
  loading.value = false
})

const sortedVaccinations = computed(() => {
  const sorted = [...vaccinations.value]
  if (sortBy.value === 'by-date') {
    return sorted.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }
  if (sortBy.value === 'by-type') {
    const typeOrder = { 'Overdue': 1, 'Core': 2, 'Noncore': 3 } as const;
    return sorted.sort((a, b) => {
      const orderA = typeOrder[a.type] || 4;
      const orderB = typeOrder[b.type] || 4;
      if (orderA !== orderB) {
        return orderA - orderB
      }
      // Secondary sort by date if types are the same
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })
  }
  return vaccinations.value
})

const badgeVariants = {
  Overdue: 'destructive',
  Noncore: 'warning',
  Core: 'success',
} as const
</script>

<template>
  <Card class="flex h-full flex-col">
    <CardHeader>
      <div class="flex items-center justify-between">
        <CardTitle class="text-base font-semibold uppercase tracking-wider text-muted-foreground">
          Vaccination Schedule
        </CardTitle>
        <div class="flex items-center gap-4">
          <Search class="size-5 text-muted-foreground" />
          <Select v-model="sortBy" default-value="by-type">
            <SelectTrigger class="w-auto">
              <SelectValue placeholder="By type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="by-type">By type</SelectItem>
              <SelectItem value="by-date">By date</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </CardHeader>
    <CardContent class="flex-grow">
      <div v-if="loading" class="flex h-full items-center justify-center">
        <p>Loading vaccination schedule...</p>
      </div>
      <Table v-else class="h-full rounded-lg border">
        <TableHeader class="bg-gray-100">
          <TableRow class="border-b-0 hover:bg-transparent">
            <TableHead class="rounded-tl-lg py-7 px-6 font-semibold text-base">Name</TableHead>
            <TableHead class="py-7 px-6 font-semibold text-base">Type</TableHead>
            <TableHead class="py-7 px-6 font-semibold text-base">Date</TableHead>
            <TableHead class="rounded-tr-lg py-7 px-6 font-semibold text-base">Veterinar</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody class="h-full">
          <TableRow v-for="vaccination in sortedVaccinations" :key="vaccination.name">
            <TableCell class="font-medium text-base py-7 px-6">{{ vaccination.name }}</TableCell>
            <TableCell class="text-base py-7 px-6">
              <Badge :variant="badgeVariants[vaccination.type]" class="rounded-sm px-4 py-2">{{ vaccination.type }}</Badge>
            </TableCell>
            <TableCell class="font-medium text-base py-7 px-6">{{ vaccination.date }}</TableCell>
            <TableCell class="text-base py-7 px-6">
              <Button v-if="!vaccination.veterinarian" size="sm">
                Find veterinar
              </Button>
              <Button v-else variant="secondary" size="sm" class="font-normal bg-gray-100 hover:bg-gray-200">
                {{ vaccination.veterinarian }}
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CardContent>
  </Card>
</template>
