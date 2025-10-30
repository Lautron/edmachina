<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import ChatListItem from './ChatListItem.vue'
import helenAvatar from '@/assets/avatars/helen.jpg'
import kathrynAvatar from '@/assets/avatars/kathryn.jpg'
import jamesAvatar from '@/assets/avatars/james.jpg'
import jimAvatar from '@/assets/avatars/jim.jpg'

interface ChatMessage {
  name: string
  message: string
  time: string
  unreadCount: number
  avatarSrc: string
  status: 'online' | 'offline'
}

const chatMessages: ChatMessage[] = [
  { name: 'Helen Brooks', message: 'Luna has been scratching her ears a lot lately and shaking her head...', time: '15:56', unreadCount: 0, avatarSrc: helenAvatar, status: 'online' },
  { name: 'Kathryn Murphy', message: 'The best way to treat an ear infection is to visit your local vet clinic a...', time: 'Wed', unreadCount: 2, avatarSrc: kathrynAvatar, status: 'online' },
  { name: 'James Grey', message: 'You should follow the instructions on the ear drops label, but usually y...', time: 'Tue', unreadCount: 0, avatarSrc: jamesAvatar, status: 'offline' },
  { name: 'Jim Brown', message: 'Hi, I have a question about my cat.', time: 'Tue', unreadCount: 0, avatarSrc: jimAvatar, status: 'offline' },
]
</script>

<template>
  <Card class="flex flex-col h-full">
    <CardHeader>
      <CardTitle class="text-xs font-semibold uppercase text-muted-foreground tracking-wider">
        Chat
      </CardTitle>
    </CardHeader>
    <CardContent class="flex-grow">
      <div class="flex flex-col justify-between h-full">
        <ChatListItem
          v-for="chat in chatMessages"
          :key="chat.name"
          :name="chat.name"
          :message="chat.message"
          :time="chat.time"
          :avatar-src="chat.avatarSrc"
          :unread-count="chat.unreadCount"
          :status="chat.status"
        />
      </div>
    </CardContent>
  </Card>
</template>