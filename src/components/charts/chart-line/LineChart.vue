<script setup lang="ts">
import { computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import type { ApexOptions } from 'apexcharts'

const props = defineProps<{
  data: Record<string, string | number>[]
  categories: string[]
  index: string
  yFormatter?: (value: number) => string
}>()

const series = computed(() => {
  return props.categories.map(category => ({
    name: category,
    data: props.data.map(item => item[category]),
  }))
})

const chartOptions = computed<ApexOptions>(() => ({
  chart: {
    type: 'area',
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  colors: ['#3788E5'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  xaxis: {
    categories: props.data.map(item => item[props.index]),
    labels: {
      style: {
        colors: 'hsl(var(--vis-text-color))',
      },
    },
  },
  yaxis: {
    labels: {
      formatter: props.yFormatter,
      style: {
        colors: 'hsl(var(--vis-text-color))',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  tooltip: {
    theme: 'dark',
  },
  grid: {
    strokeDashArray: 5,
    borderColor: '#ccc',
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 0.5,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 100],
    },
  },
}))
</script>

<template>
  <VueApexCharts :options="chartOptions" :series="series" height="100%" />
</template>
