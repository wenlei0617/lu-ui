<script>
export default {
  methods: {
    handleClick1() {
      this.$confirm('我打开了确认框').then(() => {
        
      }).catch(() => {

      });
    },
    handleClick2() {
      this.$confirm.success('操作正确').then(() => {

      }).catch(() => {
        
      });
    },
    handleClick3() {
      this.$confirm.error('操作错误').then(() => {

      }).catch(() => {
        
      });
    },
    handleClick4() {
      this.$confirm({
        type: 'success',
        message: '消息内容',
        title: '自定义消息',
      }).then(() => {

      }).catch(() => {
        
      });
    },
    handleAlert1() {
      this.$alert({
        message: '打开提示框',
        title: '提示信息2',
      });
    },
    handleAlert2() {
      this.$alert.success('打开提示框');
    },
    handleAlert3() {
      this.$alert.error('打开提示框');
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

## 提示框(Alert)

::: tip
替代系统提示，实现提示框功能
:::

#### 提示信息

<template>
  <div class="confirm" @click="handleAlert1">点击打开提示框</div>
</template>

``` html
<template>
  <div class="confirm" @click="handleAlert">点击打开提示框</div>
</template>
<script>
export default {
  handleAlert() {
    this.$alert('打开提示框');
  }, 
}
</script>
```
#### 带icon的提示信息

<template>
  <div class="confirm" @click="handleAlert2">点击打开成功提示框</div>
  <div class="confirm" @click="handleAlert3">点击打开错误提示框</div>
</template>

``` html
<template>
  <div class="confirm" @click="handleSuccessAlert">点击打开成功提示框</div>
  <div class="confirm" @click="handleErrorAlert">点击打开错误提示框</div>
</template>
<script>
export default {
    handleSuccessAlert() {
      this.$alert.success('打开提示框');
    },
    handleErrorAlert() {
      this.$alert.error('打开提示框');
    },
}
</script>
```

## 确认框(Confirm)

::: tip
替代系统提示，实现确认框功能
:::

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
      this.$confirm('我打开了确认框').then(() => {
        // 确定回调
      }).catch(() => {
        // 取消回调
      });
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
      this.$confirm.success('操作正确').then(() => {
        // 确定回调
      }).catch(() => {
        // 取消回调
      });;
    },
    handleClickError() {
      this.$confirm.error('操作错误').then(() => {
        // 确定回调
      }).catch(() => {
        // 取消回调
      });
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
      }).then(() => {
        // 确定回调
      }).catch(() => {
        // 取消回调
      });
    },
  },
};
</script>
```

#### 全局方法
$alert | $confirm
* $alert(options) options[string|object]
* $confirm(options) options[string|object]

#### Options

参数|说明|类型|可选值|默认值
-|-|-|-|-
title|消息标题|string|-|提示信息
message|消息内容|string|-|-|
type|消息类型|string|success/error|-
