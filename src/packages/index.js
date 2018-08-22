import VVLayer from './vv-layer/index.js'
import VVLoading from './vv-loading/index.js'
import VVPopUp from './vv-popup/index.js'
import VVSticky from './vv-sticky/index.js'
import VVToast from './vv-toast/index.js'

const components = [
  VVPopUp,
  VVSticky
]

const directives = [
  VVLayer,
  VVLoading,
  VVToast
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  directives.forEach(directives => {
    Vue.use(directives)
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.0.1',
  install,
  VVPopUp,
  VVSticky,
  VVLayer,
  VVLoading,
  VVToast
}
