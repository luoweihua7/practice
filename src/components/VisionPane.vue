<template>
  <ul class="vision-pane vision-grid active">
    <li class="item" v-for="(item, index) in items" :key="index">
      <img :src="item.icon" class="img-size img-item" />
      <span class="item-label">{{ item.name }}</span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const { items } = defineProps(['items'])
</script>

<style scoped>
.vision-pane {
  width: var(--app-width);
  height: var(--app-height);
  max-width: var(--app-width);
  max-height: var(--app-height);
  @apply blur-[2px] opacity-0 transition-all duration-[0.25s] ease-[ease-out] scale-[0.8];
}

.vision-grid {
  --col-width: calc((var(--app-width) - var(--icon-gap-x) * 9) / 10);
  --row-height: calc((var(--app-height) - var(--icon-gap-y) * 2) / 3);
  @apply grid grid-cols-[repeat(10,var(--col-width))] grid-rows-[repeat(3,var(--row-height))] gap-x-[var(--icon-gap-x)] gap-y-[var(--icon-gap-y)];
}

.menu {
  @apply absolute w-auto p-0;
  list-style: none;
}

.active {
  @apply blur-none opacity-100 z-[100] scale-100;
}

.item {
  @apply flex flex-col items-center justify-center col-[span_2] cursor-pointer;
}

.item-label {
  @apply text-center text-[hsla(0,0%,90%,1)];
}

.item:nth-of-type(9n + 1) {
  @apply col-[span_3] pl-[33%];
}

.item:nth-of-type(9n + 4) {
  @apply col-[span_3] pr-[33%];
}

.img-size {
  --icon-size: calc(var(--app-width) / 12);
  --icon-size-hover: calc(var(--app-width) / 10);
  @apply w-[var(--icon-size)] h-[var(--icon-size)] hover:!h-[var(--icon-size-hover)] hover:!w-[var(--icon-size-hover)];
}

.img-item {
  @apply object-cover object-center transition-all duration-[0.25s] ease-[ease-in-out] mb-4 rounded-full border-solid border-[hsla(0,0%,70%,0.1)];
  -o-object-fit: cover;
  -o-object-position: center;
}

/** 左右放大，暂时用不到 */
#environments-menu .item-img {
  @apply brightness-[0.8] saturate-[0.8] transition-all duration-[0.5s] ease-[ease-in-out] hover:w-48 hover:brightness-100 hover:saturate-100;
}
</style>
