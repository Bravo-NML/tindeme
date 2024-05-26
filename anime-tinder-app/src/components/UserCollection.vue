<template>
  <div class="user-collection">
    <h3>Your collection</h3>

    <span class="user-collection_status" v-if="status">
      {{ status }}
    </span>

    <div class="user-collection_container" v-else>
      <CollectionCard v-for="name in namesList" :key="name" :name="name"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CollectionCard from '@/components/CollectionCard.vue';
import { requestUserCollection } from '../scripts/requests'
import { onMounted, ref } from "vue"

let status = ref<string>("loading...");

const namesList = ref<string[]>([]);

onMounted(() => {
  requestUserCollection()
  .then(r => r.json())
  .then( response => {
    namesList.value.push(...response.names);
    status.value = "";
  }).catch((err) => {
    status.value = err;
  })
})

</script>

<style lang="sass" scoped>
.user-collection
  margin: 0 auto
  height: 240px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  max-width: 100%
  overflow-x: hidden

  &_container 
    margin-top: 20px

    display: flex
    justify-content: center
    align-items: center
    gap: 20px

    max-width: 100%
    width: 100%
    overflow-x: scroll

  &_status
    margin-top: 20px
</style>