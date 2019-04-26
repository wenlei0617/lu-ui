<script>
export default {
  methods: {
    handleClick1() {
      this.$confirm('我打开了确认框');
    },
    handleClick2() {
      this.$confirm.success('操作正确');
    },
    handleClick3() {
      this.$confirm.error('操作错误');
    },
    handleClick4() {
      this.$confirm({
        type: 'success',
        message: '消息内容',
        title: '自定义消息',
      });
    },
  },
};
</script>
<style>
.confirm{
  display: inline-block;
  margin-right: 10px;
  margin-top: 20px;
  color: #409eff;
  font-size: 16px;
  cursor: pointer;
}
</style>

### 确认框(Confirm)
替代系统提示，实现确认框功能

#### 消息提示

<template>
  <div class="confirm" @click="handleClick1">点击打开确认框</div>
</template>

``` html
<template>
  <div @click="handleClick">点击打开确认框</div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$confirm('我打开了确认框');
    },
  },
};
</script>
```

#### 消息类型

<template>
  <div class="confirm" @click="handleClick2">点击正确Icon确认框</div>
  <div class="confirm" @click="handleClick3">点击错误Icon确认框</div>
</template>

``` html
<template>
  <div class="confirm" @click="handleClickSuccess">点击正确Icon确认框</div>
  <div class="confirm" @click="handleClickError">点击错误Icon确认框</div>
</template>
<script>
export default {
  methods: {
    handleClickSuccess() {
      this.$confirm.success('操作正确');
    },
    handleClickError() {
      this.$confirm.error('操作错误');
    },
  },
};
</script>
```

#### 自定义消息

<template>
  <div class="confirm" @click="handleClick4">点击打开确认框</div>
</template>

``` html
<template>
  <div @click="handleClick">点击打开确认框</div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$confirm({
        type: 'success',  // 可选参数 success | error
        message: '消息内容',
        title: '自定义消息', // 默认文言 提示信息
      });
    },
  },
};
</script>
```

#### Options

参数|说明|类型|可选值|默认值
-|-|-|-|-
title|消息标题|string|-|提示信息
message|消息内容|string|-|-|
type|消息类型|string|success/error|success
