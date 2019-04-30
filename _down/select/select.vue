<template>
    <div class="select">
        <input 
            type="text" 
            :value="label"
            readonly 
            @mouseenter="handleMouse(true)"
            @mouseleave="handleMouse(false)"
            @focus.stop.prevent="handleChangeLiStatus(true)"
            :placeholder="placeholder"/>
        <div 
            class="select-box" 
            v-show="status"
            @mouseenter="handleMouse(true)"
            @mouseleave="handleMouse(false)">
            <ul class="select-ul">
                <slot></slot>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'luSelect',
  componentName: 'wlselect',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      required: true,
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
  },
  data() {
    return {
      status: false,
      clickStatus: false,
      label: '',
    };
  },
  provide() {
    return {
      wlSelect: this,
    };
  },
  watch: {
    value: {
      handler(data) {
        this.$nextTick(() => {
          for (let i = 0; i < this.$children.length; i++) {
            if (this.$children[i].value === data) {
              this.label = this.$children[i].label;
              break;
            }
          }
        });
      },
      immediate: true,       
    },
  },
  mounted() {
    document.addEventListener('click', this.handleAddEvent, false);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleAddEvent);
  },
  methods: {
    handleChangeLiStatus(status) {
      this.status = status;
    },
    handleMouse(type) {
      this.clickStatus = type;
    },
    handleAddEvent() {
      if (!this.clickStatus) {
        this.status = false;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.select{
    display: inline-block;
    width: 250px;
    height: 36px;;
    background: #fff;
    border: 1px solid #dee5eb;
    border-radius: 2px;
    box-sizing: border-box;
    position: relative;
    &-active{
        background: #17D5D1 !important;
        color: #fff !important;
    }
    &.select-year::before{
        content: '年';
        position: absolute;
        right: 28px;
        top: 7px;
        color: #a4b3c1;
        font-size: 16px;
    }
    &.select-month::before{
        content: '月';
        position: absolute;
        right: 28px;
        top: 7px;
        color: #a4b3c1;
        font-size: 16px;
    }
    &-ul{
        padding: 6px 0;
        box-sizing: border-box;
        max-height: 200px;
        overflow: auto;
    }
    &-box{
        left: 0;
        top: 40px;
        position: absolute;
        min-width: 240px;
        border: 1px solid #e4e7ed;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        box-sizing: border-box;
        margin: 5px 0;
        z-index: 99;
    }
    input{
        width: 100%;
        height: 36px;
        box-sizing: border-box;
        padding: 7px 20px;
        border: none;
        background: url(./image/select.png) no-repeat 90% center;
        background-size: 9px auto;
        font-size: 16px;
        position: relative;
        outline: none;
        &::-webkit-input-placeholder{
            color: #a4b4c1;
        }
        &::-ms-input-placeholder {
            color: #a4b4c1;
        }
    }
}
</style>
