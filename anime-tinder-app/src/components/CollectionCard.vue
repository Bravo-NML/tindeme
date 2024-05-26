<template>
  <div class="collection-card">
    <p>{{ props.name }}</p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props =  defineProps({
  name: { type: String, required: true },
})

// const backgroundColor: string = getRandomColor();

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
</script>

<style lang="sass" scoped>
@import @/assets/styles/variables.sass

.collection-card 
  width: 150px
  aspect-ratio: 3 / 4
  padding: 10px 15px

  flex-shrink: 0

  text-align: center
  box-shadow: inset 0px 0px 0px 5px $glass-black
  border-radius: 15px
  background-color: #ECB88A

  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

  p 
    max-width: 100%
    overflow: hidden
    text-overflow: ellipsis
</style>
