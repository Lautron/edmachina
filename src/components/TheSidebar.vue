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
 } from '@/components/ui/sidebar';
  import { SidebarSeparator } from '@/components/ui/sidebar';
  import { Button } from '@/components/ui/button'
  import SidebarLink from './SidebarLink.vue'
 import { Avatar, AvatarImage } from '@/components/ui/avatar'

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

 import helenAvatar from '@/assets/avatars/helen.jpg'
 import kathrynAvatar from '@/assets/avatars/kathryn.jpg'
 import jamesAvatar from '@/assets/avatars/james.jpg'
 
 import { useAuthStore } from '@/stores/auth'
 import { useRouter } from 'vue-router'
 
 const authStore = useAuthStore()
 const router = useRouter()
 function logout() {
   authStore.logout()
   router.push('/login')
 }

 interface MenuItem {
   to: string
   text: string
   iconSrc: string
   isChat?: boolean
   notificationCount?: number
 }

 interface MenuGroup {
   label: string
   items: MenuItem[]
 }

const menuGroups: MenuGroup[] = [
  {
    label: 'MENU',
    items: [
      { to: '/', text: 'Dashboard', iconSrc: DashboardIcon },
      { to: '/pet-profile', text: 'Pet profile', iconSrc: PawIcon },
    ],
  },
  {
    label: 'ANALYTICS',
    items: [
      { to: '/health', text: 'Health monitoring', iconSrc: HealthIcon },
      { to: '/vaccination', text: 'Vaccination schedule', iconSrc: VaccineIcon },
    ],
  },
  {
    label: 'SCHEDULE',
    items: [
      { to: '/chat', text: 'Chat', iconSrc: ChatIcon, isChat: true },
      { to: '/appointments', text: 'Appointments', iconSrc: CalendarIcon, notificationCount: 2 },
    ],
  },
  {
    label: 'HELP',
    items: [
      { to: '/settings', text: 'Settings', iconSrc: SettingsIcon },
      { to: '/documentation', text: 'Documentation', iconSrc: DocsIcon },
    ],
  },
]
 </script>

 <template>
   <Sidebar>
     <SidebarHeader>
       <div class="flex items-center gap-3 p-2">
          <img :src="Logo" class="size-8" alt="PetCare Logo" />
         <h2 class="text-xl font-bold">PetCare.</h2>
       </div>
     </SidebarHeader>
     <SidebarContent class="pt-12">
       <template v-for="(group, index) in menuGroups" :key="group.label">
         <SidebarGroup>
           <SidebarGroupLabel>{{ group.label }}</SidebarGroupLabel>
           <SidebarMenu>
             <SidebarMenuItem v-for="item in group.items" :key="item.text">
               <SidebarLink :to="item.to" :text="item.text" :iconSrc="item.iconSrc" :notification-count="item.notificationCount">
                 <div v-if="item.isChat" class="flex -space-x-2 overflow-hidden ml-auto">
                   <Avatar class="inline-block h-6 w-6 rounded-xs ring-2 ring-white">
                     <AvatarImage :src="helenAvatar" alt="Helen Brooks" />
                   </Avatar>
                   <Avatar class="inline-block h-6 w-6 rounded-xs ring-2 ring-white">
                     <AvatarImage :src="kathrynAvatar" alt="Kathryn Murphy" />
                   </Avatar>
                   <Avatar class="inline-block h-6 w-6 rounded-xs ring-2 ring-white">
                     <AvatarImage :src="jamesAvatar" alt="James Grey" />
                   </Avatar>
                 </div>
               </SidebarLink>
             </SidebarMenuItem>
           </SidebarMenu>
         </SidebarGroup>
         <SidebarSeparator v-if="index < menuGroups.length - 1" />
       </template>
     </SidebarContent>
     <SidebarFooter>
       <Button
         variant="ghost"
         class="w-full h-11 justify-start gap-3 px-3 font-medium text-[#E53761] hover:bg-[#E53761]/10 hover:text-[#E53761] rounded-lg"
         @click="logout"
       >
         <img :src="LogOut" class="size-5" alt="" />
         <span class="truncate">Log out</span>
       </Button>
    </SidebarFooter>
  </Sidebar>
</template>
