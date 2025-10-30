<script setup lang='ts'>
import { RouterLink, useRoute } from 'vue-router'
import { Button } from '@/components/ui/button'
import { computed } from 'vue'

const props = defineProps<{
    to: string
    text: string
    iconSrc: string
    notificationCount?: number
    }>()

 const route = useRoute()
 const isActive = computed(() => props.to === route.path)
 </script>

 <template>
   <Button
     :as="RouterLink"
     :to="to"
     variant="ghost"
     :class="[
       'w-full h-11 justify-start items-center gap-3 px-6 py-6 font-medium text-gray-600 rounded-lg',
       isActive
         ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground'
         : 'hover:bg-gray-100',
     ]"
   >
     <img :src="iconSrc" class="size-5" :class="[isActive ? 'filter-white' : 'filter-gray']" alt="" />
     <span class="truncate">
       {{ text }}
     </span>
     <slot />
     <span
       v-if="notificationCount && notificationCount > 0"
       class="ml-auto flex h-6 w-6 items-center justify-center rounded-md bg-destructive text-sm text-destructive-foreground p-3.5"
     >
       {{ notificationCount }}
     </span>
   </Button>
 </template>

 <style scoped>
 .filter-white {
   filter: brightness(0) invert(1);
 }
 .filter-gray {
  filter: invert(39%) sepia(15%) saturate(406%) hue-rotate(176deg) brightness(94%) contrast(88%); /* Corresponds to text-gray-600 */
 }
 </style>
