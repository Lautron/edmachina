<script setup lang="ts">
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

import { computed } from 'vue'

const props = defineProps<{
  name: string
  message: string
  time: string
  avatarSrc?: string
  unreadCount?: number
  status?: 'online' | 'offline'
}>()

const fallback = computed(() => props.name.substring(0, 2).toUpperCase())
</script>

<template>
  <button class="flex w-full items-center gap-3 rounded-lg text-left transition-colors">
    <div class="relative">
      <Avatar class="size-12 rounded-xl">
        <AvatarImage v-if="avatarSrc" :src="avatarSrc" :alt="name" />
        <AvatarFallback>{{ fallback }}</AvatarFallback>
      </Avatar>
      <div
        v-if="status"
        class="absolute -top-1 -right-1 size-3 rounded-full border-2 border-card"
        :class="[status === 'online' ? 'bg-green-500' : 'bg-red-500']"
      />
    </div>
    <div class="min-w-0 flex-1">
      <h4 class="font-semibold text-base">{{ name }}</h4>
      <p class="truncate text-sm text-muted-foreground">
        {{ message }}
      </p>
    </div>
    <div class="flex flex-col items-end text-xs text-muted-foreground">
      <span>{{ time }}</span>
      <Badge v-if="unreadCount && unreadCount > 0" variant="destructive" class="mt-1 h-5 w-5 justify-center rounded-full p-1">
        {{ unreadCount }}
      </Badge>
    </div>
  </button>
</template>