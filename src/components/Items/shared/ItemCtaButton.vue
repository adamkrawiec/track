<template>
  <div class="py-4">
    <a
      v-if="props.source"
      target="_blank"
      :href="url"
      class="border-2 rounded-lg px-4 py-2 bg-orange-600 border-orange-600 text-slate-50"
      data-test="item-link"
    >
      {{ ctaText }}
    </a>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
interface IProps {
  source: string | undefined,
  url: string
}
const props = defineProps<IProps>();

const ctaText: ComputedRef<string> = computed(() => {
  if(!props.source) return 'Read article'

  return {
    medium: 'Read article',
    youtube: 'Watch video',
  }[props.source] || 'Read article'
});

</script>