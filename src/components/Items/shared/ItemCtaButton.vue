<template>
  <a target="_blank" :href="url">
    {{ ctaText }}
  </a>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import type { Ref } from 'vue'
interface IProps {
  source: string,
  url: string
}
const props = defineProps<IProps>();

const ctaText: Ref<string | undefined> = computed(() => ({
  medium: 'Read article',
  youtube: 'Watch video',
}[props.source]))

</script>