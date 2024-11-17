<template>
  <Swiper
    navigation
    :slides-per-view="1"
    :space-between="50"
    :pagination="{ clickable: true }"
    :long-swipes-ratio="0.15"
    class="vision-view"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <SwiperSlide v-for="(group, index) in groups" :key="index">
      <VisionPane :items="group" />
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useAppStore } from '@/stores/app'
import VisionPane from './VisionPane.vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const { menus } = useAppStore()

const pages = 13 // 4 + 5 + 4

const groups = computed(() => {
  const list = []

  // 将数组分割成多维数组
  for (let i = 0; i < menus.length; i += pages) {
    list.push(menus.slice(i, i + pages))
  }

  return list
})

const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
</script>

<style scoped>
.vision-view {
  /** 10列，3行，横向9个间隔，竖向2个间隔 */
  width: calc(var(--app-width) + var(--icon-gap-x) * 9);
  height: calc(var(--app-height) + var(--icon-gap-y) * 2);
}
</style>
