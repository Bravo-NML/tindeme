<template>
  <button :class="`button-choice button-choice__${type}`">
    {{ texts[type] }}
  </button>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue';

interface Props {
  type: string,
}

const props = defineProps<{
  props: Props,
}>()

const type = ref(props.props.type);

interface Text {
  [name: string]: string
}

const texts: Text = {
  'pos': 'YES',
  'neg': 'NO',
}
</script>

<style lang="sass" src="@/assets/styles/elementals.sass"></style>