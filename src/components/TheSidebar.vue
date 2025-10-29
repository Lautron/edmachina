<script setup lang="ts">
 import {
   Sidebar,
   SidebarContent,
   SidebarHeader,
   SidebarGroup,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuItem,
   SidebarFooter
 } from '@/components/ui/sidebar'
 import { Button } from '@/components/ui/button'
 import SidebarLink from './SidebarLink.vue'

import DashboardIcon from '@/assets/icons/Dashboard.svg'
import PawIcon from '@/assets/icons/Paw.svg'
import HealthIcon from '@/assets/icons/HealthMonitoring.svg'
import VaccineIcon from '@/assets/icons/Vaccine.svg'
import ChatIcon from '@/assets/icons/Chat.svg'
import CalendarIcon from '@/assets/icons/Calendar.svg'
import SettingsIcon from '@/assets/icons/Settings.svg'
import DocsIcon from '@/assets/icons/Documentation.svg'
import LogOut from '@/assets/icons/LogOut.svg'
import Logo from '@/assets/icons/logo.svg'

function logout() {
  console.log('Logging out...')
}
</script>

<template>
  <Sidebar>
    <SidebarHeader>
      <div class="flex items-center gap-2 p-2">
         <img :src="Logo" class="size-7" alt="PetCare Logo" />
        <h2 class="text-xl font-bold">PetCare.</h2>
      </div>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>MENU</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarLink to="/" text="Dashboard" :iconSrc="DashboardIcon" />
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarLink to="/pet-profile" text="Pet profile" :iconSrc="PawIcon" />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>ANALYTICS</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarLink to="/health" text="Health monitoring" :iconSrc="HealthIcon" />
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarLink to="/vaccination" text="Vaccination schedule" :iconSrc="VaccineIcon" />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>SCHEDULE</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarLink to="/chat" text="Chat" :iconSrc="ChatIcon" />
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarLink to="/appointments" text="Appointments" :iconSrc="CalendarIcon" :notification-count="2" />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>HELP</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarLink to="/settings" text="Settings" :iconSrc="SettingsIcon" />
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarLink to="/documentation" text="Documentation" :iconSrc="DocsIcon" />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <Button
        variant="ghost"
        class="w-full justify-start gap-2 font-normal text-destructive hover:text-destructive hover:bg-destructive/10"
        @click="logout"
      >
        <img :src="LogOut" class="size-5" alt="" />
        <span>Log out</span>
      </Button>
    </SidebarFooter>
  </Sidebar>
</template>
