<script setup lang="ts">
import SideMenu from '@/components/SideMenu.vue'
import VisionPane from '@/components/VisionPane.vue'

const { menus } = useAppStore()
</script>

<template>
  <main class="main">
    <SideMenu class="left"></SideMenu>
    <VisionPane class="right" :items="menus" />
  </main>
</template>

<style lang="css" scoped>
.main {
  @apply w-[66rem] h-[30rem] grid grid-cols-[10%_80%] blur-none z-10;
}

.left {
  @apply w-[6rem];
}

.right {
  @apply w-[60rem];
}
</style>
