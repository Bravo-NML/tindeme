<template>
  <NavigationGlobal/>
  <router-view/>
</template>

<style lang="sass" src="@/assets/styles/base.sass"></style>

<script lang="ts" setup>
import NavigationGlobal from './components/NavigationGlobal.vue';
</script>