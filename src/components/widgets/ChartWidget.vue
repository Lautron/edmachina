<script setup lang="ts">
import { ref, computed } from 'vue'
import FireIcon from '@/assets/icons/fire.svg'
import HeartbeatIcon from '@/assets/icons/heartbeat.svg'
import HeartIcon from '@/assets/icons/heart.svg'
import ThermometerIcon from '@/assets/icons/thermometer.svg'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { LineChart } from '@/components/ui/chart-line'
import { VisArea } from '@unovis/vue'
import { CurveType } from '@unovis/ts'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

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

const dropdownOptions = ['Daily', 'Weekly', 'Monthly']
const selectedDropdownValue = computed({
  get: () => dropdownOptions[2],
  set: () => {},
})


</script>

<template>
  <svg width="0" height="0" class="absolute">
    <defs>
      <linearGradient id="area-fill-gradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="hsl(var(--vis-primary-color))" stop-opacity="0.2" />
        <stop offset="100%" stop-color="hsl(var(--vis-primary-color))" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
  <Card>
    <CardHeader class="flex flex-row items-center justify-between">
      <CardTitle class="text-base font-semibold uppercase text-muted-foreground tracking-wider">
        Health Monitoring
      </CardTitle>
      <Select v-model="selectedDropdownValue">
        <SelectTrigger class="w-[120px]">
          <SelectValue :placeholder="selectedDropdownValue" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem v-for="option in dropdownOptions" :key="option" :value="option">
            {{ option }}
          </SelectItem>
        </SelectContent>
      </Select>
    </CardHeader>
    <CardContent class="flex flex-col flex-1 min-h-0">
      <Tabs v-model="activeTab" default-value="stress" class="flex flex-col h-full">
        <TabsList class="grid h-auto w-full grid-cols-2 gap-2 bg-transparent p-0 sm:grid-cols-4">
          <TabsTrigger value="stress" class="h-auto flex-1 gap-2.5 rounded-lg border-none px-5 py-3 text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm">
            <img :src="HeartIcon" class="size-5" :class="[activeTab === 'stress' ? 'filter-white' : 'filter-gray']" />
            Stress level
          </TabsTrigger>
          <TabsTrigger value="pulse" class="h-auto flex-1 gap-2.5 rounded-lg border-none px-5 py-3 text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm">
            <img :src="HeartbeatIcon" class="size-5" :class="[activeTab === 'pulse' ? 'filter-white' : 'filter-gray']" />
            Pulse
          </TabsTrigger>
          <TabsTrigger value="temperature" class="h-auto flex-1 gap-2.5 rounded-lg border-none px-5 py-3 text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm">
            <img :src="ThermometerIcon" class="size-5" :class="[activeTab === 'temperature' ? 'filter-white' : 'filter-gray']" />
            Temperature
          </TabsTrigger>
          <TabsTrigger value="calories" class="h-auto flex-1 gap-2.5 rounded-lg border-none px-5 py-3 text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm">
            <img :src="FireIcon" class="size-5" :class="[activeTab === 'calories' ? 'filter-white' : 'filter-gray']" />
            Calories Burned
          </TabsTrigger>
        </TabsList>
        <TabsContent value="stress" class="mt-4 flex-1">
          <LineChart
            class="h-full"
            :data="chartData"
            index="month"
            :categories="['level']"
            :show-legend="false"
            :y-formatter="(tick: any) => typeof tick === 'number' ? tick.toFixed(0) : ''"
          >
            <VisArea
              :x="(d: any, i: number) => i"
              :y="(d: any) => d.level"
              :curve-type="CurveType.MonotoneX"
              color="url(#area-fill-gradient)"
            />
          </LineChart>
        </TabsContent>
        <TabsContent value="pulse" class="mt-4 flex-1">
          <LineChart
            class="h-full"
            :data="chartData"
            index="month"
            :categories="['level']"
            :show-legend="false"
            :y-formatter="(tick: any) => typeof tick === 'number' ? tick.toFixed(0) : ''"
          >
            <VisArea
              :x="(d: any, i: number) => i"
              :y="(d: any) => d.level"
              :curve-type="CurveType.MonotoneX"
              color="url(#area-fill-gradient)"
            />
          </LineChart>
        </TabsContent>
        <TabsContent value="temperature" class="mt-4 flex-1">
          <LineChart
            class="h-full"
            :data="chartData"
            index="month"
            :categories="['level']"
            :show-legend="false"
            :y-formatter="(tick: any) => typeof tick === 'number' ? tick.toFixed(1) : ''"
          >
            <VisArea
              :x="(d: any, i: number) => i"
              :y="(d: any) => d.level"
              :curve-type="CurveType.MonotoneX"
              color="url(#area-fill-gradient)"
            />
          </LineChart>
        </TabsContent>
        <TabsContent value="calories" class="mt-4 flex-1">
          <LineChart
            class="h-full"
            :data="chartData"
            index="month"
            :categories="['level']"
            :show-legend="false"
            :y-formatter="(tick: any) => typeof tick === 'number' ? tick.toFixed(0) : ''"
          >
            <VisArea
              :x="(d: any, i: number) => i"
              :y="(d: any) => d.level"
              :curve-type="CurveType.MonotoneX"
              color="url(#area-fill-gradient)"
            />
          </LineChart>
        </TabsContent>
      </Tabs>
    </CardContent>
  </Card>
</template>