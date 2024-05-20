<template>
  <div class="character-card">
  
    <h2>Каках Пердунович</h2>
    <div class="cc-background"></div>

    <ButtonsBlock :buttonsReqired="reuqiredButtons"/>
  </div>
</template>

<script lang="ts" setup>
import ButtonsBlock from './basics/ButtonsBlock.vue';

interface Button {
  type: string,
  props: object,
}

const reuqiredButtons: Button[] = [
  {
    type: 'choice',
    props: {
      mod: 'pos',
    }
  }, {
    type: 'choice',
    props: {
      mod: 'neg',
    }
  },
]
</script>