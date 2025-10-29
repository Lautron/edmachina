<script setup lang="ts">
import { Card } from '@/components/ui/card'
import StatDonutWidget from '@/components/widgets/StatDonutWidget.vue'
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="h-16 bg-card px-4 shadow-sm"></div>
    <div class="grid grid-cols-1 gap-4 px-4 pb-4 lg:grid-cols-5">
      <!-- Left Section -->
      <div class="flex flex-col gap-4 lg:col-span-3">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
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
        <Card class="h-96" />
      </div>

      <!-- Right Section -->
      <div class="flex flex-col gap-4 lg:col-span-2">
        <Card class="h-80" />
        <Card class="flex-1" />
      </div>
    </div>
  </div>
</template>


