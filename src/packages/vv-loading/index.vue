<template>
  <transition name="fadeIn">
    <div v-show="showState" 
         class="web-components loading-mask js-prevent-penetrate" 
         :style="maskStyle">
      <div class="in-loading" v-html="svg" :style="loadingStyle"></div>
    </div>
  </transition>
</template>
<script>
import * as svgLoading from './svg'
export default {
  name: 'VvLoading',
  data () {
    return {
      showState: false,
      type: 'spin',
      color: '#ec584d',
      maskStyle: {
        backgroundColor: 'hsla(0, 0%, 100%, 0.1)'
      },
      size: {
        width: '200px',
        height: '200px'
      }
    }
  },
  methods: {
    _show () {
      this.showState = true
    },
    _hide () {
      this.showState = false
    }
  },
  mounted () {
    if (!this.supportSVG) {
      alert('您的浏览器不支持SVG')
    }
  },
  computed: {
    svg () {
      return svgLoading[this.type]
    },
    loadingStyle () {
      return { fill: this.color, width: this.size.width, height: this.size.height }
    },
    supportSVG () {
      return typeof window.SVGRect !== undefined
    }
  }
}
</script>

<style scoped lang="scss">
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .loading-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color:hsla(0,0%,100%,.9);
  }
  .in-loading {
    margin: auto;
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translate3d(-50%, -50%, 0);
  }
  .js-prevent-penetrate {
    touch-action: none;
  }
  .content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.7);
    width: 50%;
    border-radius: 10px;
    text-align: center;
    padding-bottom: 2%;
  }
  .i-font {
    display: inline-block;
    font-size: 90px;
    color: #fff;
    transform-origin: 47% 49%;
    animation: aniRotate 1s linear infinite;
  }
  .text {
    font-size: 30px;
    color: #fff;
    height: 50px;
    overflow: hidden;
    li {
      line-height: 50px;
    }
  }
  @keyframes aniRotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
