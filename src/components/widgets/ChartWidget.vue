<script setup lang="ts">
import { ref, computed } from 'vue'
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { LineChart } from '@/components/ui/chart-line'

const stressData = [
  { month: 'September', level: 1.2 },
  { month: '', level: 2.3 },
  { month: '', level: 1.8 },
  { month: '', level: 3.2 },
  { month: '', level: 2.8 },
  { month: 'November', level: 3.4 },
  { month: '', level: 2.7 },
  { month: '', level: 3.2 },
  { month: '', level: 2.4 },
  { month: 'December', level: 4.8 },
  { month: '', level: 6.2 },
  { month: '', level: 5 },
  { month: 'January', level: 2.0 },
  { month: '', level: 3.8 },
]

const pulseData = [
  { month: 'September', level: 60 },
  { month: '', level: 62 },
  { month: '', level: 65 },
  { month: '', level: 63 },
  { month: '', level: 68 },
  { month: 'November', level: 70 },
  { month: '', level: 72 },
  { month: '', level: 75 },
  { month: '', level: 73 },
  { month: 'December', level: 78 },
  { month: '', level: 80 },
  { month: '', level: 82 },
  { month: 'January', level: 75 },
  { month: '', level: 77 },
]

const temperatureData = [
  { month: 'September', level: 36.5 },
  { month: '', level: 36.6 },
  { month: '', level: 36.7 },
  { month: '', level: 36.8 },
  { month: '', level: 36.9 },
  { month: 'November', level: 37.0 },
  { month: '', level: 37.1 },
  { month: '', level: 37.2 },
  { month: '', level: 37.3 },
  { month: 'December', level: 37.4 },
  { month: '', level: 37.5 },
  { month: '', level: 37.6 },
  { month: 'January', level: 37.7 },
  { month: '', level: 37.8 },
]

const caloriesData = [
  { month: 'September', level: 2000 },
  { month: '', level: 2100 },
  { month: '', level: 2200 },
  { month: '', level: 2300 },
  { month: '', level: 2400 },
  { month: 'November', level: 2500 },
  { month: '', level: 2600 },
  { month: '', level: 2700 },
  { month: '', level: 2800 },
  { month: 'December', level: 2900 },
  { month: '', level: 3000 },
  { month: '', level: 3100 },
  { month: 'January', level: 3200 },
  { month: '', level: 3300 },
]

const activeTab = ref('stress')

const chartData = computed(() => {
  switch (activeTab.value) {
    case 'pulse':
      return pulseData
    case 'temperature':
      return temperatureData
    case 'calories':
      return caloriesData
    default:
      return stressData
  }
})
</script>

<template>
  <Card>
    <CardHeader class="flex flex-row items-center justify-between">
      <CardTitle>Health Monitoring</CardTitle>
      <Select default-value="monthly">
        <SelectTrigger class="w-[120px]">
          <SelectValue placeholder="Monthly" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="daily">Daily</SelectItem>
          <SelectItem value="weekly">Weekly</SelectItem>
          <SelectItem value="monthly">Monthly</SelectItem>
        </SelectContent>
      </Select>
    </CardHeader>
    <CardContent>
      <Tabs v-model="activeTab" default-value="stress">
        <TabsList>
          <TabsTrigger value="stress">Stress level</TabsTrigger>
          <TabsTrigger value="pulse">Pulse</TabsTrigger>
          <TabsTrigger value="temperature">Temperature</TabsTrigger>
          <TabsTrigger value="calories">Calories Burned</TabsTrigger>
        </TabsList>
        <TabsContent value="stress" class="mt-4">
          <LineChart
            class="h-48"
            :data="chartData"
            index="month"
            :categories="['level']"
            :show-legend="false"
            :y-formatter="(tick: any) => typeof tick === 'number' ? tick.toFixed(0) : ''"
          />
        </TabsContent>
        <TabsContent value="pulse" class="mt-4">
          <LineChart
            class="h-48"
            :data="chartData"
            index="month"
            :categories="['level']"
            :show-legend="false"
            :y-formatter="(tick: any) => typeof tick === 'number' ? tick.toFixed(0) : ''"
          />
        </TabsContent>
        <TabsContent value="temperature" class="mt-4">
          <LineChart
            class="h-48"
            :data="chartData"
            index="month"
            :categories="['level']"
            :show-legend="false"
            :y-formatter="(tick: any) => typeof tick === 'number' ? tick.toFixed(1) : ''"
          />
        </TabsContent>
        <TabsContent value="calories" class="mt-4">
          <LineChart
            class="h-48"
            :data="chartData"
            index="month"
            :categories="['level']"
            :show-legend="false"
            :y-formatter="(tick: any) => typeof tick === 'number' ? tick.toFixed(0) : ''"
          />
        </TabsContent>
      </Tabs>
    </CardContent>
  </Card>
</template>