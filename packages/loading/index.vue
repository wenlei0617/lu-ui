<template>
  <div class="lu-loading">
    <div class="lu-loading__text">
      {{text}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'lu-loading',
  props: {
    text: {
      type: String,
      default: 'Loading...',
    },
  },
};
</script>
<style lang="less" scoped>
.lu-loading{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background: rgba(0,0,0,.5);
}
.lu-loading__text{
  font-size: 16px;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  line-height: 100px;
  margin: auto;
  text-align: center;
}
</style>
