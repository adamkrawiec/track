<template>
  <div v-if="sourceImg" class="w-24 my-2">
    <img :src="sourceImg">
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import type { Ref } from 'vue'

interface IProps {
  source: string
}

const props = defineProps<IProps>();

const sourceImg: Ref<string> = computed(() => {
  const mapping = {
    medium: '/medium.jpeg',
    youtube: '/youtube.png'
  }
  return mapping[props.source];
});

</script>