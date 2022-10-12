<script setup>
import IconArrowTailUp from '/src/assets/svg/icon-arrow+tail-up.vue'

const props = defineProps({
  selected: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggleSelectedState'])
</script>

<template>
  <div>
    <icon-arrow-tail-up 
      class="rounded-lg h-10 w-10 p-2"
      :class="selected ? 'bg-hex-efe8fd fill-hex-253CF2' : 'bg-hex-f4f6f8 fill-hex-343a40'"
      @click="emit('toggleSelectedState')"
    />
  </div>
</template>