<template>
  <div class="twonotes">
    <div class="explanation">
      <p>2音間のインターバルに関する問題を出題します。出題範囲を下記から選択できます。</p>
      <p>選択後に出題ボタンを押すと、開始します。</p>
    </div>

    <h1 v-on:mouseenter="mouseOn(1)" v-on:mouseleave="mouseLeave()">音部記号</h1>
    <!-- TODO: マジックナンバーでイけていない -->
    <p v-if="hoverFlag && 1 == hoverIndex" id="balloon">音部記号とは、00000のことです。</p>
    <div v-for="(clef, i) in clefs" :key="i">
      <input :id="i" type="checkbox" :value="clef.name" v-model="selectedNotes">
      <label :for="clef.name">{{ clef.viewName }}</label>
    </div>

    <h1 v-on:mouseenter="mouseOn(2)" v-on:mouseleave="mouseLeave()">音程</h1>
    <!-- TODO: L10と同じ -->
    <p v-if="hoverFlag && 2 == hoverIndex" id="balloon">音程とは、00000のことです。</p>
    <div v-for="(quality, j) in qualities" :key="j">
      <input :id="j" type="checkbox" :value="quality.name" v-model="selectedQualities">
      <label :for="quality.name">{{ quality.viewName }}</label>
    </div>

    <h1 v-on:mouseenter="mouseOn(3)" v-on:mouseleave="mouseLeave()">インターバル</h1>
    <!-- TODO: L10と同じ -->
    <p v-if="hoverFlag && 3 == hoverIndex" id="balloon">インターバルとは、00000のことです。</p>
    <div v-for="(interval, k) in intervals" :key="k">
      <input :id="k" type="checkbox" :value="interval.name" v-model="selectedIntervals">
      <label :for="interval.name">{{ interval.viewName }}</label>
    </div>

    <!-- TODO: ここはモーダルにしてクイズを出力する -->
    <!-- <transition name="modal" appear>
      <div class="modal modal-overlay" @click.self="$emit('close')">
        <div class="modal-window">
          <div class="modal-content">
          </div>
          <footer class="modal-footer">
            <slot name="footer">
              <button @click="$emit('close')">Close</button>
            </slot>
          </footer>
        </div>
      </div>
    </transition> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

type Column = {
  name: string;
  viewName: string;
}

@Component
export default class TwoNotes extends Vue{
  // hoverFlag: boolean = false;
  // REF: https://okkuso.com/vscode-error-no-inferrable-types/
  hoverFlag = false
  // REF: https://qiita.com/TK-C/items/edb7dc7d796b07811b78
  hoverIndex = 0
  clefs: Column[] = [
    {
      name: 'Treble',
      viewName: 'トレブル記号(Treble)'
    },
    {
      name: 'Bass',
      viewName: 'バス記号(Bass)'
    },
    {
      name: 'Alto',
      viewName: 'アルト記号(Alto)'
    },
    {
      name: 'Tnor',
      viewName: 'テノール記号(Tnor)'
    },
  ];
  qualities: Column[] = [
    {
      name: 'DoublyDiminished',
      viewName: 'ダブルディミニッシュ(重減音程)'
    },
    {
      name: 'Diminished',
      viewName: 'ディミニッシュ(減音程)'
    },
    {
      name: 'Perfect/Major/Minor',
      viewName: 'パーフェクト(完全音程)/メジャー(長音程)/マイナー(短音程)'
    },
    {
      name: 'Augmented',
      viewName: 'オーギュメント(増音程)'
    },
    {
      name: 'DoublyAugmented',
      viewName: 'ダブルオーギュメント(重増音程)'
    },
  ];
  intervals: Column[] = [
    {
      name: '2nds',
      viewName: '2度'
    },
    {
      name: '3rds',
      viewName: '3度'
    },
    {
      name: '4ths',
      viewName: '4度'
    },
    {
      name: '5ths',
      viewName: '5度'
    },
    {
      name: '6ths',
      viewName: '6度'
    },
    {
      name: '7ths',
      viewName: '7度'
    },
    {
      name: '8ves',
      viewName: '8度'
    },
    {
      name: '9ths',
      viewName: '9度'
    },
  ];
  selectedNotes: string[] = [];
  selectedQualities: string[] = [];
  selectedIntervals: string[] = [];

  /**
   * Methods
   * 返り値の型表現は、「: void」とすること
   */
  mouseOn(index: number): void {
    this.hoverFlag = true
    this.hoverIndex = index
  }
  mouseLeave(): void {
    this.hoverFlag = false
  }

}
</script>

<style>
  .modal {
    &.modal-overlay {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      z-index: 30;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }

    &-window {
      background: #fff;
      border-radius: 4px;
      overflow: hidden;
    }

    &-content {
      padding: 10px 20px;
    }

    &-footer {
      background: #ccc;
      padding: 10px;
      text-align: right;
    }
  }

  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.4s;

    .modal-window {
      transition: opacity 0.4s, transform 0.4s;
    }
  }

  .modal-leave-active {
    transition: opacity 0.6s ease 0.4s;
  }

  .modal-enter,
  .modal-leave-to {
    opacity: 0;

    .modal-window {
      opacity: 0;
      transform: translateY(-20px);
    }
  }

</style>