<template>
  <div class="home">
    <Top msg="Welcome to the SpaAllegro"/>
    <Abc />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Top from '@/components/Top.vue';
import Abc from '@/components/Abc.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Top,
    Abc
  },
});
</script>
