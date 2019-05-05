<template>
  <div class="lu-confirm">
    <transition name="lu-zoom-in-center">
      <div class="lu-confirm__container" v-show="visibled">
        <p class="lu-confirm__title">
          <i class="lu-iconfont" :class="`lu-icon-${type}`"></i>
          <span :class="`${type ? `lu-confirm__text--${type}` : ''}`">{{title}}</span>
        </p>
        <p class="lu-confirm__message">{{message}}</p>
        <div class="lu-confirm__footer">
          <button 
            v-if="boxType === 'confirm'"
            class="lu-confirm__btn lu-confirm__cancel"
            @click="handleCancel">取消</button>
          <button 
            class="lu-confirm__btn lu-confirm__confirm" 
            @click="handleConfirm">确定</button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'lu-confirm',
  data() {
    return {
      visibled: false,
      message: '',
      type: '',
      title: '',
      boxType: '',
    };
  },
  mounted() {
    window.addEventListener('hashchange', this.handleHashChange);
    window.addEventListener('popstate', this.handleHashChange);
  },
  beforeDestroy() {
    window.removeEventListener('hashchange', this.handleHashChange);
    window.removeEventListener('popstate', this.handleHashChange);
  },
  methods: {
    handleHashChange() {
      this.removeSelf();
    },
    handleCancel() {
      this.callback();
      this.removeSelf();
    },
    handleConfirm() {
      if (this.boxType === 'confirm') {
        this.callback(true);
        this.removeSelf();
      } else {
        this.removeSelf();
      }
    },
    removeSelf() {
      this.$el.parentNode.removeChild(this.$el);
      this.$destroy();
    },
  },
};
</script>
