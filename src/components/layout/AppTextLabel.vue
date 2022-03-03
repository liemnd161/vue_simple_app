<template>
  <div class="row col-12 text-left pt-3 pb-3">
    <div class="col-sm-4"><b>{{title}}:</b></div>
    <div class="col-sm-8"><b>{{text}}</b></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppTextLabel',
  props: {
    title: String,
    text: String
  }
})
</script>
