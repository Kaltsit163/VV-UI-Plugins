<template>
  <transition name="fade">
    <div v-sticky="stickyConfig">
      <slot name="main"></slot>
    </div>
  </transition>
</template>
<script>
import VvSticky from '../../directive/sticky.js'
export default {
  name: 'VvSticky',
  directives: {
    sticky: VvSticky
  },
  props: {
    zIndex: {
      type: Number,
      default: 1000
    },
    stickyTop: {
      type: Number,
      default: 0
    }
  },
  computed: {
    stickyConfig () {
      return {
        zIndex: parseInt(this.zIndex),
        stickyTop: parseInt(this.stickyTop)
      }
    }
  }
};

</script>
<style lang="scss" scoped>
  .bus-shell-cover{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .bus-shell-content{
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    background-color: #fff;
    overflow: auto;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
    .bus-shell-content {
      transform: translate(0, 100%);
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s ease;
    .bus-shell-content {
      transition: transform .3s ease;
    }
  }
</style>
