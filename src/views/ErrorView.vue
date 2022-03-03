<template>
  <div class="about">
    <h1>Error {{status}}</h1>
  </div>
</template>

<script lang="ts">import Vue from 'vue'

export default Vue.extend({
  name: 'ErrorView',
  props: {
    status: Number
  }
})</script>
