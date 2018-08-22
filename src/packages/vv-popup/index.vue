<template>
  <transition name="fade">
  <div class="bus-shell-cover"
       v-show="showShell"
       @click="slideDownShell"
       :style="{zIndex: zIndex}">
    <div class="bus-shell-content" 
         :style="{maxHeight: shellContH + 'px'}"
         @click.stop>
      <slot></slot>
    </div>
  </div>
  </transition>
</template>
<script>
export default {
  name: 'VvPopUp',
  data() {
    return {
      showShell: false
    };
  },
  props: {
    shellContH: {
      type: Number
    },
    zIndex: {
      type: Number,
      default: 1000
    }
  },
  methods: {
    slideUpShell() {
      this.showShell = true;
    },
    slideDownShell() {
      this.showShell = false;
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
