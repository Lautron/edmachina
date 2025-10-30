<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import ChatListItem from './ChatListItem.vue'
import { getChatMessages, type ChatMessage } from '@/api/mock'
import { onMounted, ref } from 'vue'

const chatMessages = ref<ChatMessage[]>([])
const loading = ref(true)

onMounted(async () => {
  chatMessages.value = await getChatMessages()
  loading.value = false
})
</script>

<template>
  <Card class="flex flex-col h-full">
    <CardHeader>
      <CardTitle class="text-base font-semibold uppercase text-muted-foreground tracking-wider">
        Chat
      </CardTitle>
    </CardHeader>
    <CardContent class="flex-grow">
      <div v-if="!loading" class="flex flex-col justify-between h-full">
        <ChatListItem
          v-for="chat in chatMessages"
          :key="chat.name"
          :name="chat.name"
          :message="chat.message"
          :time="chat.time"
          :unread-count="chat.unreadCount"
          :avatar-src="chat.avatarSrc"
          :status="chat.status"
        />
      </div>
      <div v-else class="flex h-full items-center justify-center">
        <p>Loading chats...</p>
      </div>
    </CardContent>
  </Card>
</template>