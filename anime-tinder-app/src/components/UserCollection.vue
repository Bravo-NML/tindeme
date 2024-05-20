<template>
  <div class="user-collection">
    <h3>Your collection</h3>

    <span class="user-collection_status" v-if="status">
      {{ status }}
    </span>

    <div class="user-collection_container" v-else>
      <CollectionCard v-for="name in namesList" :key="name" :name="name"/>
    </div>

    <!-- <div class="user-collection_container">
      <CollectionCard name="Имечко Длинннннннннннннннооооооооое"/>
    </div> -->
  </div>
</template>

<style lang="sass" src="@/assets/styles/components.sass"></style>

<script lang="ts" setup>
import CollectionCard from './basics/CollectionCard.vue';
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
