<template>
  <div class="home">
    <Top msg="Welcome to the SpaAllegro"/>
    <Abc />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Top from '@/components/Top.vue';
import Abc from '@/components/Abc.vue';

@Component({
  components: {
    Top,
    Abc
  }
})

export default class Home extends Vue{}
</script>
