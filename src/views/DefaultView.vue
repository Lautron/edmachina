<script setup lang='ts'>
import {computed} from 'vue'
import {useRoute} from 'vue-router'
const route = useRoute()
const formattedTitle = computed( () => {
    let str = route.path.replace(/^\/|\/$/g, "")
    str = str.replace(/-/g, " ")
    str = str.replace(/\b\w/g, c => c.toUpperCase())
    return str
})
</script>

<template>
  <div>
      <h1>{{formattedTitle}} Page</h1>
    </div>
</template>
