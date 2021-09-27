<template>
  <div class="interval">
    <!-- <h1>This is an "interval" page</h1>
    <p>One of features is coming soon...</p> -->
    <TwoNotes />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import TwoNotes from '@/components/TwoNotes.vue';

  export default Vue.extend({
    name: 'Interval',
    components: {
      TwoNotes,
    },
  });
</script>