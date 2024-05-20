<template>
  <div class="main-container" :class="{
    'mod__tindime': route.name === 'app'
  }">
    <NavigationGlobal/>
    <router-view/>
  </div>
</template>

<style lang="sass" src="@/assets/styles/base.sass"></style>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
import NavigationGlobal from './components/NavigationGlobal.vue';
</script>