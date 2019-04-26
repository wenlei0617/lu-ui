<template>
    <li
        :class="{'select-active': value === wlSelect.value}" 
        class="select-li" 
        @click="handleClick">{{label}}</li>
</template>
<script>
export default {
  name: 'luOptions',
  inject: ['wlSelect'],
  props: {
    value: {
      required: true,
    },
    label: {
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.wlSelect.handleChangeLiStatus(false);
      this.wlSelect.label = this.label;
      this.wlSelect.$emit('change', this.value);
    },
  },
};
</script>

<style lang="less" scoped>
.select-active{
    background: #17D5D1 !important;
    color: #fff !important;
}
.select-li{
    font-size: 14px;
    padding: 0 20px;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #606266;
    height: 34px;
    line-height: 34px;
    cursor: pointer;
    box-sizing: border-box;
    &:hover{
        background: #f5f7fa;
    }
}
</style>
