<template>
  <div>
    <input 
      type="text" 
      :value="value" 
      @input="handleInput($event)"/>
  </div>
</template>
<script>
export default {
  name: 'lu-form-input',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    required: {
      type: Boolean,
      default: () => false,
    },
    rules: {
      type: [Array, Object, Boolean], // { validator, msg }
      default: () => false,
    },
    value: {
      type: [String, Number, Boolean],
    },
  },
  data() {
    return {
      componentName: 'lu-form-input',
    };
  },
  methods: {
    validate() {
      const { rules } = this;
      if (rules === false) {
        return true;
      }
      if (Array.isArray(rules)) {
        // TODO 批量验证
      } else {
        return this.validateRules(rules);
      }
    },
    validateRules({ validator, msg }) {
      const { required, value } = this;
      if (required && value) {
        const reg = new RegExp(validator);
        const flg = reg.test(value);
        if (!flg) {
          console.warn(msg);
        } 
        return flg;
      }
      return true;
    },
    handleInput(event) {
      this.$emit('change', event.target.value.trim());
    },
  },
};
</script>
