<script setup lang="ts">
import StatDonutWidget from '@/components/widgets/StatDonutWidget.vue'
import ChartWidget from '@/components/widgets/ChartWidget.vue'
import ChatWidget from '@/components/widgets/ChatWidget.vue'
import VaccinationSchedule from '@/components/widgets/VaccinationSchedule.vue'
import WidgetSearchHeader from '@/components/widgets/WidgetSearchHeader.vue'
</script>

<template>
  <div class="flex h-full flex-col gap-5">
    <WidgetSearchHeader />
    <div class="grid flex-1 grid-cols-1 gap-5 px-4 pb-4 lg:grid-cols-6">
      <!-- Left Section -->
      <div class="grid grid-rows-[auto_1fr] gap-5 lg:col-span-4">
        <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
          <StatDonutWidget
              title="ACTIVITY"
              :percentage="25"
              chart-color="text-destructive"
          />
          <StatDonutWidget
              title="SLEEP"
              :percentage="79"
              chart-color="text-chart-2"
              :dropdown-options="['Weekly', 'Daily', 'Monthly']"
          />
          <StatDonutWidget
              title="WELLNESS"
              :percentage="52"
              chart-color="text-chart-4"
              :dropdown-options="['Weekly', 'Daily', 'Monthly']"
          />
        </div>
        <ChartWidget />
      </div>

      <!-- Right Section -->
      <div class="flex flex-col gap-5 lg:col-span-2">
        <VaccinationSchedule class="basis-0 grow-[60]" />
        <ChatWidget class="basis-0 grow-[40]" />
      </div>
    </div>
  </div>
</template>


