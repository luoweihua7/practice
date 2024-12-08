<template>
  <ul class="vision-grid">
    <li class="vision-item" v-for="(item, index) in items" :key="index">
      <img :src="item.icon" class="img-icon" />
      <span class="label-text">{{ item.name }}</span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const { items } = defineProps(['items'])
</script>

<style lang="css" scoped>
.vision-grid {
  @apply w-full h-full grid grid-cols-10;
}

.vision-item {
  @apply w-full h-full flex flex-col justify-center items-center col-span-2 cursor-pointer;
}

/** 单行缩进 */
.vision-item:nth-of-type(9n + 1) {
  @apply col-start-2;
}

.img-icon {
  @apply w-[6rem] h-[6rem] rounded-full bg-gray-100 object-cover;
  @apply scale-90 transition-all duration-[0.25s] ease-[ease-in-out];
}

.img-icon:hover {
  @apply scale-95;
}

.label-text {
  @apply text-xs font-medium text-nowrap align-middle text-center text-[hsla(0,0%,90%,1)];
}
</style>
