<script setup lang="ts">
import { Card } from '@/components/ui/card'
import StatDonutWidget from '@/components/widgets/StatDonutWidget.vue'
import ChartWidget from '@/components/widgets/ChartWidget.vue'
</script>

<template>
  <div class="flex h-full flex-col gap-5">
    <div class="basis-0 grow-[10] bg-card px-4 shadow-sm"></div>
    <div class="grid basis-0 grow-[90] grid-cols-1 gap-5 px-4 pb-4 lg:grid-cols-6">
      <!-- Left Section -->
      <div class="flex flex-col gap-5 lg:col-span-4">
        <div class="grid basis-0 grow-[30] grid-cols-1 gap-5 md:grid-cols-3">
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
        <ChartWidget class="basis-0 grow-[65]" />
      </div>

      <!-- Right Section -->
      <div class="flex flex-col gap-5 lg:col-span-2">
        <Card class="basis-0 grow-[60]" />
        <Card class="basis-0 grow-[40]" />
      </div>
    </div>
  </div>
</template>


