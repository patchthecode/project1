<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import UpvoteComponent from '/src/components/UpvoteComponent.vue'
import IconAddFilled from '/src/assets/svg/icon-add-filled.vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  initialCount: {
    type: Number,
    default: 1
  }
})

const maxUpvoteComponentCount = 7
const localCount = props.initialCount <= maxUpvoteComponentCount &&  props.initialCount > 0 ? ref(props.initialCount) : ref(1)
const store = useStore()
const selectedState = computed(()=> store.state.upvoteManagerSelectedStates[props.id].selected)

// Adds a new UpVoteComponent to the manager. 
// The count is limited count to maximum 7.
function addUpvoteComponent() {
  if(localCount.value >= maxUpvoteComponentCount) { return }
  localCount.value += 1
}

// Toggles the selected state of the linked components between selected and un-selected.
function toggleSelectedState() {
  store.dispatch('updateUpdateManager', { id: props.id, selected: !selectedState.value })
}
</script>

<template>
  <div class="grid grid-cols-[auto,max-content] items-center gap-x-3">
    <div class="grid justify-items-start border rounded-lg">
      <div class="grid grid-flow-col gap-x-3 p-3">
        <upvote-component v-for="index in localCount" :key="index"
          :selected="selectedState"
          @toggleSelectedState="toggleSelectedState"
        />
      </div>
    </div>
    <icon-add-filled 
      class="rounded-lg h-10 w-10 p-2 bg-hex-f4f6f8 fill-hex-343a40"
      @click="addUpvoteComponent"
    />
  </div>
</template>