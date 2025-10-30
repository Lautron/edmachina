<script setup lang="ts">
import { Search } from 'lucide-vue-next'
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

interface Vaccination {
  name: string
  type: 'Overdue' | 'Noncore' | 'Core'
  date: string
  veterinarian?: string
}

const vaccinations: Vaccination[] = [
  { name: 'Rabies', type: 'Overdue', date: '01 Dec 2023' },
  { name: 'Bordetella', type: 'Noncore', date: '11 Dec 2024', veterinarian: 'James Grey' },
  { name: 'Distemper', type: 'Core', date: '27 Jun 2024', veterinarian: 'Jim Brown' },
  { name: 'Calicivirus', type: 'Core', date: '16 Sep 2024', veterinarian: 'Helen Brooks' },
]

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
        <CardTitle class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Vaccination Schedule
        </CardTitle>
        <div class="flex items-center gap-4">
          <Search class="size-5 text-muted-foreground" />
          <Select default-value="by-type">
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
      <Table class="h-full rounded-lg border">
        <TableHeader class="bg-gray-100">
          <TableRow class="border-b-0 hover:bg-transparent">
            <TableHead class="rounded-tl-lg py-7 px-6 font-semibold">Name</TableHead>
            <TableHead class="py-7 px-6 font-semibold">Type</TableHead>
            <TableHead class="py-7 px-6 font-semibold">Date</TableHead>
            <TableHead class="rounded-tr-lg py-7 px-6 font-semibold">Veterinar</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody class="h-full">
          <TableRow v-for="vaccination in vaccinations" :key="vaccination.name">
            <TableCell class="font-medium py-7 px-6">{{ vaccination.name }}</TableCell>
            <TableCell class="py-7 px-6">
              <Badge :variant="badgeVariants[vaccination.type]" class="rounded-full px-3">{{ vaccination.type }}</Badge>
            </TableCell>
            <TableCell class="text-muted-foreground py-7 px-6">{{ vaccination.date }}</TableCell>
            <TableCell class="py-7 px-6">
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
