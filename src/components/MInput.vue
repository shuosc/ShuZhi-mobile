<template>
  <div class="q-if row no-wrap items-center relative-position q-input q-if-has-label text-primary">
    <div class="q-if-inner col row no-wrap items-center relative-position">
      <div class="q-if-label ellipsis full-width absolute self-start q-if-label-above">{{stackLabel}}</div>
      <input v-model="value" class="col q-input-target text-left">
    </div>
  </div>
</template>

<script>
export default {
  props: ['value', 'stack-label']
}
</script>

<style>

</style>
