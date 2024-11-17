<template>
  <div class="w-24 flex flex-col justify-center items-stretch relative">
    <ul class="side-menu menu">
      <li v-for="(side, index) in sides" :key="index">
        <input type="radio" name="side-menu" id="apps-radio" /><label for="apps-radio">
          <Icon icon="ri--apps-2-fill" />
          <span>{{ side.name }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { useAppStore } from '@/stores/app'

const { sides } = useAppStore()
</script>

<style scoped>
.side-menu {
  @apply z-[999] p-3 backdrop-blur-lg rounded-[2rem] border-[solid] border-[hsla(0,0%,70%,0.1)];
  -webkit-backdrop-filter: blur(1rem);
  -moz-backdrop-filter: blur(1rem);
}

.side-menu:hover {
  @apply opacity-100 w-32 ml-4;
}

.side-menu input[type='radio'] {
  @apply hidden appearance-none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.side-menu li + li {
  @apply mt-2;
}

.side-menu li {
  @apply text-[hsla(0,0%,70%,1)] text-start text-base transition-all duration-[0.25s] ease-[ease-in-out] p-2 rounded-[2rem];

  &:hover,
  &:has(input[type='radio']:checked) {
    @apply bg-[hsla(0,0%,90%,0.2)] text-[hsla(0,0%,90%,1)];
  }
}

.side-menu label {
  @apply flex flex-row overflow-hidden;
}

.side-menu label span {
  @apply opacity-0 w-0 transition-all duration-[0.25s] ease-[ease-in-out] ml-0;
}
</style>
