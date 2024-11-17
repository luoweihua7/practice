import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

interface Menu {
  name: string
  icon: string
  innerUrl: string
  outerUrl: string
}

interface SideMenu {
  icon: string
  name: string
  type: 'inner' | 'outer'
  className?: string
  color?: string
}

interface Config {
  background: string
  menus: Menu[]
}

const { background: customBg = '', menus: customMenus = [] }: Config = window.config

export const useAppStore = defineStore('app', () => {
  const background = ref(customBg)

  const menus = reactive(customMenus)

  const sides = reactive<SideMenu[]>([
    {
      icon: 'ri--apps-2-fill',
      color: '',
      className: '',
      name: '内网导航',
      type: 'inner',
    },
    {
      icon: 'token--energy-web',
      color: '',
      className: '',
      name: '外网导航',
      type: 'outer',
    },
  ])

  const index = ref(0)

  const menu = computed(() => {
    return menus[index.value] ?? menus[0]
  })

  const switchMenu = (m: Menu) => {
    const newIndex = menus.findIndex((item) => (m = item))

    index.value = newIndex
  }

  return {
    background,
    menus,
    index,
    menu,
    sides,

    switchMenu,
  }
})
