<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
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
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { LineChart } from '@/components/charts/chart-line'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { getHealthData, type HealthData } from '@/api/mock'

const activeTab = ref('stress')
const healthData = ref<HealthData | null>(null)
const loading = ref(true)

onMounted(async () => {
  healthData.value = await getHealthData()
  loading.value = false
})

const dropdownOptions = ['Daily', 'Weekly', 'Monthly']
const selectedPeriod = ref(dropdownOptions[2])


const yFormatter = (tick: number) => tick.toFixed(0)
const yFormatterWithOneDecimal = (tick: number) => tick.toFixed(1)

const chartConfig = computed(() => {
  if (!healthData.value || !selectedPeriod.value)
    return null

  const period = selectedPeriod.value.toLowerCase() as keyof typeof healthData.value.stress

  switch (activeTab.value) {
    case 'stress':
      return { data: healthData.value.stress[period], yFormatter }
    case 'pulse':
      return { data: healthData.value.pulse[period], yFormatter }
    case 'temperature':
      return { data: healthData.value.temperature[period], yFormatter: yFormatterWithOneDecimal }
    case 'calories':
      return { data: healthData.value.calories[period], yFormatter }
    default:
      return null
  }
})
</script>

<template>
  <Card>
    <CardHeader class="flex flex-row items-center justify-between">
      <CardTitle class="text-base font-semibold uppercase text-muted-foreground tracking-wider">
        Health Monitoring
      </CardTitle>
      <Select v-model="selectedPeriod">
        <SelectTrigger class="w-[120px]">
          <SelectValue :placeholder="selectedPeriod" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem v-for="option in dropdownOptions" :key="option" :value="option">
            {{ option }}
          </SelectItem>
        </SelectContent>
      </Select>
    </CardHeader>
    <CardContent class="flex flex-col flex-1 min-h-0">
      <div v-if="loading" class="flex h-full items-center justify-center">
        <p>Loading health data...</p>
      </div>
      <Tabs v-else-if="healthData" v-model="activeTab" default-value="stress" class="flex flex-col h-full">
        <TabsList class="grid h-auto w-full grid-cols-2 gap-2 bg-transparent p-0 sm:grid-cols-4">
          <TabsTrigger value="stress" class="h-auto flex-1 gap-2.5 rounded-lg border-none px-5 py-3 text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm">
            <img :src="HeartIcon" class="size-5" :class="[activeTab === 'stress' ? 'filter-white' : 'filter-gray']" />
            <span class="text-base font-semibold">Stress level</span>
          </TabsTrigger>
          <TabsTrigger value="pulse" class="h-auto flex-1 gap-2.5 rounded-lg border-none px-5 py-3 text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm">
            <img :src="HeartbeatIcon" class="size-5" :class="[activeTab === 'pulse' ? 'filter-white' : 'filter-gray']" />
            <span class="text-base font-semibold">Pulse</span>
          </TabsTrigger>
          <TabsTrigger value="temperature" class="h-auto flex-1 gap-2.5 rounded-lg border-none px-5 py-3 text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm">
            <img :src="ThermometerIcon" class="size-5" :class="[activeTab === 'temperature' ? 'filter-white' : 'filter-gray']" />
            <span class="text-base font-semibold">Temperature</span>
          </TabsTrigger>
          <TabsTrigger value="calories" class="h-auto flex-1 gap-2.5 rounded-lg border-none px-5 py-3 text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm">
            <img :src="FireIcon" class="size-5" :class="[activeTab === 'calories' ? 'filter-white' : 'filter-gray']" />
            <span class="text-base font-semibold">Calories burned</span>
          </TabsTrigger>
        </TabsList>
        <div v-if="chartConfig" class="mt-4 flex-1">
          <LineChart
            class="h-full"
            :data="chartConfig.data"
            index="period"
            :categories="['level']"
            :y-formatter="chartConfig.yFormatter"
          />
        </div>
      </Tabs>
    </CardContent>
  </Card>
</template>