<script setup lang='ts'>
import { RouterLink, useRoute } from 'vue-router'
import { Button } from '@/components/ui/button'
import { computed } from 'vue'

const props = defineProps<{
    to: string
    text: string
    iconSrc: string
    }>()

const route = useRoute()
const isActive = computed(() => props.to === route.path)
</script>

<template>
    <Button
        :as='RouterLink'
        :to='to'
        variant='ghost'
        :class="[
      'w-full justify-start gap-2 font-normal',
      isActive && 'bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:text-primary-foreground',
    ]"
        >
    <img :src="iconSrc" class="size-5" alt="" />
    <span>
        {{text}}
    </span>
    </Button>
</template>
