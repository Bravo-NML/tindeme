<template>
  <button :class="`button-choice button-choice__${mod}`">
    {{ texts[mod] }}
  </button>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue';

interface Props {
  mod: string,
}

const props = defineProps<{
  props: Props,
}>()

const mod = ref(props.props.mod);

interface Text {
  [name: string]: string
}

const texts: Text = {
  'pos': 'YES',
  'neg': 'NO',
}
</script>

<style lang="sass" scoped>
@import @/assets/styles/variables.sass

.button-choice
  cursor: pointer
  width: 70px
  aspect-ratio: 2 / 1
  padding: 25px 25px 20px 20px
  position: absolute
  border: none
  background-color: white
  font-weight: bold
  font-size: 1.2em
  bottom: 0
  color: white
  background-color: #00000095

  &__pos
    border-radius: 30px 0% 30px 0%
    right: 0px

    &:active, &:hover 
      color: rgba($green-text, .9)

  &__neg
    border-radius: 0% 30px 0 30px
    left: 0px

    &:active, &:hover 
      color: rgba($red-text, .9)
</style>