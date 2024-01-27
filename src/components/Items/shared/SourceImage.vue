<template>
  <div v-if="sourceImg" class="w-24 my-2">
    <img :src="sourceImg">
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import type { Ref } from 'vue'

interface IProps {
  source: string | undefined
}

const props = defineProps<IProps>();

interface IMap {
  [key: string]: string
}

const sourceImg: Ref<string | undefined> = computed(() => {
  const mapping: IMap = {
    medium: '/medium.jpeg',
    youtube: '/youtube.png'
  }
  return props.source && mapping[props.source];
});

</script>