import Vue from 'vue'
import merge from '../../util/merge'
import Loading from './index.vue'

let $instance
let LoadingConstructor = Vue.extend(Loading)

let initInstance = () => {
  $instance = new LoadingConstructor({
    el: document.createElement('div')
  })
  // 添加到boby
  document.body.appendChild($instance.$el)
}

let $Loading = (options = {}) => {
  initInstance()
  merge($instance.$data, options)
  return {
    show: $instance._show,
    hide: $instance._hide
  }
}

Loading.install = (Vue, options) => {
  if (!Vue.$loading) {
    Vue.$loading = $Loading(options)
  }
  Vue.prototype.$loading = Vue.$loading
}

export default Loading
