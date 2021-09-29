<template>
  <div class="interval">
    <!-- <h1>This is an "interval" page</h1>
    <p>One of features is coming soon...</p> -->
    <TwoNotes />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TwoNotes from '../components/TwoNotes.vue';

@Component({
  components: {
    TwoNotes
  }
})
export default class Interval extends Vue {
}
</script>