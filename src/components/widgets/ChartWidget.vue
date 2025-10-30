<script setup lang="ts">
import { ref, onMounted } from 'vue'
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
const selectedDropdownValue = ref(dropdownOptions[2])


</script>

<template>
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
      <div v-if="loading" class="flex h-full items-center justify-center">
        <p>Loading health data...</p>
      </div>
      <Tabs v-else-if="healthData" v-model="activeTab" default-value="stress" class="flex flex-col h-full">
        <TabsList class="grid h-auto w-full grid-cols-2 gap-2 bg-transparent p-0 sm:grid-cols-4">
          <TabsTrigger value="stress" class="h-auto flex-1 gap-2.5 rounded-lg border-none px-5 py-3 text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm">
            <img :src="HeartIcon" class="size-5" :class="[activeTab === 'stress' ? 'filter-white' : 'filter-gray']" />
            <span class="text-base font-semibold">Stress</span>
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
            <span class="text-base font-semibold">Calories</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="stress" class="mt-4 flex-1">
          <LineChart
            class="h-full"
            :data="healthData.stress"
            index="month"
            :categories="['level']"
            :y-formatter="(tick: number) => tick.toFixed(0)"
          />
        </TabsContent>
        <TabsContent value="pulse" class="mt-4 flex-1">
          <LineChart
            class="h-full"
            :data="healthData.pulse"
            index="month"
            :categories="['level']"
            :y-formatter="(tick: number) => tick.toFixed(0)"
          />
        </TabsContent>
        <TabsContent value="temperature" class="mt-4 flex-1">
          <LineChart
            class="h-full"
            :data="healthData.temperature"
            index="month"
            :categories="['level']"
            :y-formatter="(tick: number) => tick.toFixed(1)"
          />
        </TabsContent>
        <TabsContent value="calories" class="mt-4 flex-1">
          <LineChart
            class="h-full"
            :data="healthData.calories"
            index="month"
            :categories="['level']"
            :y-formatter="(tick: number) => tick.toFixed(0)"
          />
        </TabsContent>
      </Tabs>
    </CardContent>
  </Card>
</template>