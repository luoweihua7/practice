<script setup lang="ts">
import SideMenu from '@/components/SideMenu.vue'
import VisionPane from '@/components/VisionPane.vue'

const { menus } = useAppStore()
</script>

<template>
  <main class="main">
    <SideMenu></SideMenu>
    <VisionPane :items="menus" />
  </main>
</template>

<style lang="css" scoped>
.main {
  height: max(66.6vh, var(--app-min-height));
  @apply w-[90%] grid grid-cols-[10%_80%] blur-none z-10;
}
</style>
