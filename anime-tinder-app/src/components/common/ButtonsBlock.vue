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

  return defineAsyncComponent(() => import(`@/components/common/Button${processedName}.vue`));
}

</script>

<style lang="sass" scoped>
.buttons-block 
  display: flex
  width: 100%
  gap: 20px 10px

  &.mod__character-card 
    width: 100%
    position: absolute
    bottom: 0
</style>