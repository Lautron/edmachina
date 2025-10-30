<script setup lang="ts">
import { onMounted, ref } from 'vue'
import StatDonutWidget from '@/components/widgets/StatDonutWidget.vue'
import ChartWidget from '@/components/widgets/ChartWidget.vue'
import ChatWidget from '@/components/widgets/ChatWidget.vue'
import VaccinationSchedule from '@/components/widgets/VaccinationSchedule.vue'
import WidgetSearchHeader from '@/components/widgets/WidgetSearchHeader.vue'
import { Spinner } from '@/components/ui/spinner'
import { getDonutStats, type DonutStat } from '@/api/mock'

const donutStats = ref<DonutStat[]>([])
const loadingStats = ref(true)
onMounted(async () => {
  donutStats.value = await getDonutStats()
  loadingStats.value = false
})
</script>

<template>
  <div class="flex h-full flex-col gap-6">
    <WidgetSearchHeader />
    <div class="grid flex-1 grid-cols-1 gap-6 px-6 pb-4 lg:grid-cols-20">
      <!-- Left Section -->
      <div class="grid grid-rows-[21rem_1fr] gap-6 lg:col-span-11">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div v-if="loadingStats" class="flex items-center justify-center md:col-span-3">
            <Spinner class="size-8" />
          </div>
          <template v-else>
            <StatDonutWidget
              v-for="stat in donutStats"
              :key="stat.title"
              :title="stat.title"
              :percentage="stat.percentage"
              :chart-color="stat.chartColor"
            />
          </template>
        </div>
        <ChartWidget />
      </div>

      <!-- Right Section -->
      <div class="grid grid-rows-20 gap-6 lg:col-span-9">
        <VaccinationSchedule class="row-span-12" />
        <ChatWidget class="row-span-8" />
      </div>
    </div>
  </div>
</template>


