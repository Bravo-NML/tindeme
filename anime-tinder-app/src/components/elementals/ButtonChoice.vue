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

<style lang="sass" src="@/assets/styles/elementals.sass"></style>