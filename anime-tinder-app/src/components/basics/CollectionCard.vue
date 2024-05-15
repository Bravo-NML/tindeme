<template>
  <div class="collection-card" :style="`background-color: ${backgroundColor};`">
    <p>{{ props.name }}</p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props =  defineProps({
  name: { type: String, required: true },
})

const backgroundColor: string = getRandomColor();

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
</script>

<style lang="sass" src="@/assets/styles/basics.sass"></style>
