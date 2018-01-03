<template>
  <div class="q-if row no-wrap items-center relative-position q-input q-if-has-label text-primary">
    <div class="q-if-inner col row no-wrap items-center relative-position">
      <div class="q-if-label ellipsis full-width absolute self-start q-if-label-above">{{stackLabel}}</div>
      <input ref="input" v-bind:value="value" class="col q-input-target text-left" @:input="updateValue($event.target.value)>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value', 'stack-label'],
  methods: {
    // 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
    updateValue: function (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style>

</style>
