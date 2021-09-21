<template>
  <div class="abc">
    <div id="container"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import abcjs from 'abcjs'

export default Vue.extend({
  name: 'Abc',
  mounted: function () {
    // abcjsのレンダリング
    abcjs.renderAbc("container", "c");
  },
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
