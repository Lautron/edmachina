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
    <CardContent>
      <Table>
        <TableHeader class="rounded-t-lg bg-gray-100">
          <TableRow class="hover:bg-gray-50">
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Veterinar</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="vaccination in vaccinations" :key="vaccination.name" class="h-16">
            <TableCell class="font-medium">{{ vaccination.name }}</TableCell>
            <TableCell>
              <Badge :variant="badgeVariants[vaccination.type]">{{ vaccination.type }}</Badge>
            </TableCell>
            <TableCell>{{ vaccination.date }}</TableCell>
            <TableCell>
              <Button v-if="!vaccination.veterinarian" size="sm">
                Find veterinar
              </Button>
              <Button v-else variant="outline" size="sm" class="font-normal">
                {{ vaccination.veterinarian }}
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CardContent>
  </Card>
</template>