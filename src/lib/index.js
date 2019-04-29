import SwitchTab from '../components/index.vue'

const install = function (Vue, config = {}) {
  if (install.installed) return

  Vue.component(SwitchTab.name, SwitchTab)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  SwitchTab
}
