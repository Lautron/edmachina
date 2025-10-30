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
       <SidebarSeparator />
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
       <SidebarSeparator />
       <SidebarGroup>
         <SidebarGroupLabel>SCHEDULE</SidebarGroupLabel>
         <SidebarMenu>
           <SidebarMenuItem>
             <SidebarLink to="/chat" text="Chat" :iconSrc="ChatIcon">
               <div class="flex -space-x-2 overflow-hidden ml-auto">
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
           <SidebarMenuItem>
             <SidebarLink to="/appointments" text="Appointments" :iconSrc="CalendarIcon" :notification-count="2" />
           </SidebarMenuItem>
         </SidebarMenu>
       </SidebarGroup>
       <SidebarSeparator />
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
         class="w-full h-11 justify-start gap-3 px-3 font-medium text-[#E53761] hover:bg-[#E53761]/10 hover:text-[#E53761] rounded-lg"
         @click="logout"
       >
         <img :src="LogOut" class="size-5" alt="" />
         <span class="truncate">Log out</span>
       </Button>
    </SidebarFooter>
  </Sidebar>
</template>
