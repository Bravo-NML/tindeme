<template>
  <div class="character-card">
  
    <h2>Каках Пердунович</h2>
    <div class="cc-background"></div>

    <ButtonsBlock class="mod__character-card" :buttonsReqired="reuqiredButtons"/>
  </div>
</template>

<script lang="ts" setup>
import ButtonsBlock from '@/components/common/ButtonsBlock.vue';

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

<style lang="sass" src="@/assets/styles/variables.sass"></style>

<style lang="sass" scoped>
@import @/assets/styles/variables.sass

.character-card
  width: 400px
  aspect-ratio: 5 / 7
  background-image: url('@/assets/img/character.jpeg')
  background-size: auto 102%
  background-position: center
  border-radius: 35px
  position: relative
  display: flex
  flex-direction: column
  justify-content: space-between
  border: 5px solid #00000095

  h2
    width: 100%
    position: absolute
    left: 0
    padding: 20px 16px 20px 12px
    letter-spacing: 2px
    max-height: 90%
    height: auto
    border-radius: 30px 0 30px 0px 
    width: auto
    color: white
    background-color: #00000095
    line-height: 120%

  .cc-background
    width: 100%
    height: 100%
    margin-top: 15px
</style>