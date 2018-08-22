import Vue from 'vue'
import $Layer from './index.vue'
import merge from '../../util/merge'

let $instance
let LayerConstructor = Vue.extend($Layer)

let initInstance = () => {
  $instance = new LayerConstructor({
    el: document.createElement('div')
  })
  // 添加到boby
  document.body.appendChild($instance.$el)
}

let Confirm = (options = {}) => {
  initInstance()
  merge($instance.$data, options)
  return new Promise((resolve, reject) => {
    $instance.show = true
    let success = $instance.success
    let cancel = $instance.cancel
    $instance.success = () => {
      success && success()
      resolve(true)
    }
    $instance.cancel = () => {
      cancel && cancel()
      reject(false)
    }
  })
}

let Alert = (options = {}) => {
  initInstance()
  merge($instance.$data, { ...options,
    'cancelTXT': null
  })
  return new Promise((resolve, reject) => {
    $instance.show = true
    let success = $instance.success
    let cancel = $instance.cancel
    $instance.success = () => {
      success && success()
      resolve(true)
    }
    $instance.cancel = () => {
      cancel && cancel()
      reject(false)
    }
  })
}

$Layer.install = (Vue) => {
  if (!Vue.$confirm) {
    Vue.$confirm = Confirm
  }
  if (!Vue.$alert) {
    Vue.$alert = Alert
  }
  Vue.prototype.$confirm = Vue.$confirm
  Vue.prototype.$alert = Vue.$alert
}

export default $Layer
