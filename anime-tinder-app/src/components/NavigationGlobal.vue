<template>
  <nav class="navigation">
    <router-link 
      v-for="tab in tabsList" 
      :to="tab.url"
      :key="tab.url"
      :class="{
        'mod__active': currentPath === tab.url,
      }"
    >
      {{ tab.name }}
    </router-link>
  </nav>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

interface tabsListItem {
  name: string,
  urls: string,
}

const route = useRoute(),
  currentPath: string = computed(() => route.path);

const tabsList: tabsListItem[] = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Tindime',
    url: '/app',
  },
  {
    name: 'Collection',
    url: '/colleciton',
  },
]
</script>
