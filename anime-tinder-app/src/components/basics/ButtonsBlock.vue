<template>
  <div class="buttons-block">
    <component
      v-for="(button, id) in buttonsList"
      :key="id"
      :is="button.component"
      :props="button.props"
    />
  </div>
</template>

<style lang="sass" src="@/assets/styles/basics.sass"></style>

<script lang="ts" setup>
import { defineAsyncComponent, defineProps } from 'vue'

const props = defineProps<{
  buttonsReqired: object,
}>()

const buttonsList = Object.entries(props.buttonsReqired).map(item => {
  return {
    props: item[1],
    component: getComponentByName(item[0]),
  }
})

function getComponentByName(name: string) {
  const processedName = name.split('-').map((str: string) => str.charAt(0).toUpperCase() + str.slice(1));

  return defineAsyncComponent(() => import(`@/components/elementals/Button${processedName}.vue`));
}

</script>