<template>
  <div class="abc">
    <div id="container"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import abcjs from 'abcjs';

@Component
export default class Abc extends Vue{
  // REF: https://qiita.com/ryo2132/items/4d43209ea89ad1297426
  mounted(): void {
    /*
    * abcjsのレンダリング
    * [M:C] 拍子記号(C)
    * [K:style=normal] キー設定
    * [CG] 和音作成(C,G)
    * 2 四分音符
    * | 小節区切り
    */
    abcjs.renderAbc("container", "[M:C][K:style=normal]!mark![CG]2");
  }
}
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
