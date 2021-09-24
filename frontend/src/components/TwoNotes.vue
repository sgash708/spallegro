<template>
  <div class="twonotes">
    <div v-for="(clef, i) in clefs" :key="i">
      <input :id="i" type="checkbox" :value="clef.name" v-model="selectedNotes">
      <label :for="clef.name">{{ clef.viewName }}</label>
    </div>

    <transition name="modal" appear>
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
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Interval',
  data() {
    return {
      clefs: [
        {
          name: 'treble',
          viewName: 'トレブル記号(Treble)'
        },
        {
          name: 'bass',
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
      ],
      selectedNotes: []
    }
  },
});
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