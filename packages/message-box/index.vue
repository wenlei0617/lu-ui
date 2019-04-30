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
<style lang="less" scoped>
@name: lu-confirm;

.lu-zoom-in-center-enter-active,
.lu-zoom-in-center-leave-active {
  transition: all .3s cubic-bezier(.55,0,.1,1);
}
.lu-zoom-in-center-enter,
.lu-zoom-in-center-leave-active {
  opacity: 0;
  transform: scaleX(0);
}
.@{name} {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000000;
  background: rgba(0,0,0,.5);
  &__text--error{
    color: #FF6767;
  }
  &__text--success{
    color: #0AC380;
  }
  .lu-icon-error{
    color: #FF6767;
    font-size: 20px;
    margin-right: 10px;
  }
  .lu-icon-success{
    color: #0AC380;
    font-size: 20px;
    margin-right: 10px;
  }
  &__btn{
    width: 58px;
    height: 28px;
    border-radius: 5px;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
    outline: none;
    &:active{
      opacity: .5;
    }
  }
  &__cancel{
    border: 1px solid #909399;
    color: #000;
    background: #fff;
    &:hover{
      background: #909399;
      color: #fff;
    }
  }
  &__confirm{
    border: 1px solid #007AFF;
    color: #007AFF;
    background: #fff;
    &:hover{
      background: #007AFF;
      color: #fff;
    }
  }
  &__footer{
    text-align: right;
    margin-top: 5px;
  }
  &__container{
    background: #FFFFFF;
    box-shadow: 0 2px 20px 0 rgba(0,0,0,0.50);
    border-radius: 10px;
    width: 340px;
    min-height: 80px;
    padding: 16px;
    box-sizing: border-box;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
  }
  &__title{
    font-size: 16px;
    color: #000;
    font-weight: bold;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
  }
  &__message{
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
