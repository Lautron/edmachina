<script setup lang="ts">
import { Cat } from 'lucide-vue-next'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from '@/components/ui/sidebar'
</script>

<template>
  <Sidebar>
    <SidebarHeader>
      <div class="flex items-center gap-2 p-2">
         <Cat class="size-7 text-primary" />
        <h2 class="text-xl font-bold">PetCare.</h2>
      </div>
    </SidebarHeader>
    <SidebarContent>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton to="/dashboard">Dashboard</SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContent>
  </Sidebar>
</template>
