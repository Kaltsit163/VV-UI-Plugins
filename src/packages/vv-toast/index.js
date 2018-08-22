import Toast from './index.vue'

Toast.install = (Vue, defaultOptions = {}) => {
  const CONSTRUCTOR = Vue.extend(Toast)
  const CACHE = {}
  Object.assign(Toast.DEFAULT_OPT, defaultOptions)

  function toast(msg, options = {}) {
    options.message = msg
    let toast = CACHE[options.id] || (CACHE[options.id] = new CONSTRUCTOR())
    if (!toast.$el) {
      let vm = toast.$mount()
      document.querySelector(options.parent || 'body').appendChild(vm.$el)
    }
    toast.queue.push(options)
  }
  Vue.prototype.$toast = toast
}

export default Toast
