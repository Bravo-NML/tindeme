<template>
  <div class="character-card" style="width: 300px; height: 450px">
    <h2>Каках Пердунович</h2>

    <ButtonsBlock :buttonsReqired="reuqiredButtons"/>
  </div>
</template>

<script lang="ts" setup>
import ButtonsBlock from './basics/ButtonsBlock.vue';

interface Button {
  [name: string]: object
}

const reuqiredButtons: Button = {
  'choice': {
    type: 'pos'
  }
}
</script>