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
  --col-width: calc((100% - var(--icon-gap-x) * 9) / 10);
  --row-height: calc((100% - var(--icon-gap-y) * 2) / 3);
  @apply w-full h-full !min-h-[var(--app-min-height)] grid grid-cols-[repeat(10,var(--col-width))] grid-rows-[repeat(3,var(--row-height))] gap-x-[var(--icon-gap-x)] gap-y-[var(--icon-gap-y)];
}

.vision-item {
  @apply grid col-[span_2] cursor-pointer;
  @apply w-full h-full rounded-full;
}

.vision-item:nth-of-type(9n + 1) {
  @apply col-[span_3] pl-[33%];
}

.vision-item:nth-of-type(9n + 4) {
  @apply col-[span_3] pr-[33%];
}

.img-icon {
  --icon-size: max(75pxx, calc(0.7 * var(--app-min-width) / 5));
  background: #ccc;
  box-shadow:
    2px 2px 8px #777,
    inset 2px 2px 8px #eee;
  @apply place-items-center p-1 object-contain w-[var(--icon-size)] h-[var(--icon-size)] scale-[65%] bg-gray-100 rounded-full border-[hsla(0,0%,70%,0.1)];
  @apply transition-all duration-[0.25s] ease-[ease-in-out];
}

.img-icon:hover {
  @apply scale-75;
}

.label-text {
  @apply text-nowrap align-middle text-center text-[hsla(0,0%,90%,1)];
}
</style>
