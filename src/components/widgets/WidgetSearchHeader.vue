<script setup lang="ts">
import { Search, Bell, HelpCircle } from 'lucide-vue-next'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="flex h-24 items-center justify-between border-b bg-card px-5 py-3">
    <!-- Search Bar -->
    <div class="flex h-9 w-1/2 items-center gap-2 rounded-md border bg-transparent px-3 py-3">
      <Search class="size-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search"
        class="h-auto border-none bg-transparent p-0 shadow-none focus-visible:ring-0"
      />
    </div>

    <!-- Action Buttons -->
    <div class="flex items-center gap-2">
      <Button variant="ghost" size="icon-sm">
        <HelpCircle class="size-5 text-muted-foreground" />
      </Button>
      <Button variant="ghost" size="icon-sm">
        <Bell class="size-5 text-muted-foreground" />
      </Button>
      <Button size="sm">
        Add widget
      </Button>
    </div>
  </div>
</template>
