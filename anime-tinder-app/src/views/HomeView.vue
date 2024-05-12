<template>
  <div class="home">
    <span v-if="status === 'loading...'">
      {{ status }}
    </span>

    <ul v-else>
      <li v-for="name in namesList" :key="name">
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue"

let status = ref<string>("loading...");

const dataUrl = "http://127.0.0.1:5000/get_name/",
  namesList = ref<string[]>([]);

onMounted(() => {
  fetch(dataUrl)
  .then(r => r.json())
  .then( response => {
    const names: string[] = response.names
    namesList.value.push(...names);
    status.value = "ready";
  }).catch((err) => {
    console.log(err)
  })
})

</script>
