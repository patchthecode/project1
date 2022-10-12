<script setup>
import UpvoteManagerComponent from '/src/components/UpvoteManagerComponent.vue'
import { useStore } from 'vuex'

const upvoteManagers =  [
  {id: 'a', initialCount: 3, selected: false},
  {id: 'b', initialCount: 2, selected: false},
  {id: 'c', initialCount: 5, selected: false},
]

useStore().dispatch('setupNewUpvoteManagers', upvoteManagers)
</script>

<template>
  <div class="grid gap-y-7">
    <upvote-manager-component v-for="manager in upvoteManagers" :key="manager.id"
      :id="manager.id"  
      :initialCount="manager.initialCount" 
      class="w-108" 
    />
  </div>
</template>