<template>
  <div class="buttons-block">
    <component
      v-for="(button, index) in buttonsList"
      :key="index"
      :is="button.component"
      :props="button.props"
    />
  </div>
</template>

<style lang="sass" src="@/assets/styles/basics.sass"></style>

<script lang="ts" setup>
import { defineAsyncComponent, defineProps } from 'vue'

const props = defineProps<{
  buttonsReqired: object[],
}>()

interface Button {
  type: string,
  props: object,
}

const buttonsList: object[] = props.buttonsReqired.map((item: Button) => {
  return {
    props: item.props,
    component: getComponentByName(item.type),
  }
})

function getComponentByName(name: string) {
  const processedName = name.split('-').map((str: string) => str.charAt(0).toUpperCase() + str.slice(1));

  return defineAsyncComponent(() => import(`@/components/elementals/Button${processedName}.vue`));
}

</script>