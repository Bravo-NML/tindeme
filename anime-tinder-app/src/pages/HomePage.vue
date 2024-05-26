<template>
  <div class="page">
    <h1 class="main-header">TINDIME UNREAL</h1>
    
    <UserCollection/>
  </div>
</template>

<style lang="sass" src="@/assets/styles/pages.sass"></style>

<script lang="ts" setup>
import UserCollection from '@/components/UserCollection.vue';
</script>

<style lang="sass" scoped>
@import @/assets/styles/variables.sass

.main-header 
  font-size: clamp(12px, 15vw, 23vh)
  line-height: 100%
  margin: 5vh auto
  text-align: center
  color: $red-text
</style>
