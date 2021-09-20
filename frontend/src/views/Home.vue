<template>
  <div class="home">
    <Top msg="Welcome to the SpaAllegro"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Top from '@/components/Top.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Top,
  },
});
</script>
