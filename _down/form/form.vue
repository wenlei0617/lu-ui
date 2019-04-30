<template>
  <form>
    <slot></slot>
  </form>
</template>
<script>
export default {
  name: 'lu-form',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    validate() {
      return new Promise((resolve, reject) => {
        this.getInput(this.$children).then(() => {
          resolve();
        }).catch(() => {
          reject();
        });
      });
    },
    getInput(children) {
      let flg = false;
      return new Promise((resolve, reject) => {
        for (let i = 0; i < children.length; i++) {
          if (children[i].componentName === 'lu-form-input') {
            // TODO 做验证
            const validateFlg = children[i].validate();
            flg = validateFlg;
            if (!validateFlg) break;
          } else if (children[i].length > 0) {
            this.getInput(children[i].$children);
          }
        }
        if (flg) {
          resolve();
        } else {
          reject();
        }
      });
    },
  },
};
</script>
