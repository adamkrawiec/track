<template>
  <table class="table-fixed border-collapse w-full border border-slate-400 border-slate-500 bg-white text-sm shadow-sm">
    <table-header :headers="headers" />
    <tbody>
      <tr v-if="loading" >
        <td colspan="3" class="px-3 py-3 text-slate-500 text-slate-400 text-center">
          {{ loadingCopy }}
        </td>
      </tr>
      <tr v-else-if="items.length === 0" >
        <td colspan="3" class="px-3 py-3 text-slate-500 text-slate-400 text-center" data-test="empty-placeholder">
          {{ emptyCopy }}
        </td>
      </tr>
      <tr
        v-else
        class="bg-white border-b"
        v-for="item in items"
        :key="`item-${item.id}`"
      >
        <slot name="data-row" :item="item" />
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import TableHeader from './table/TableHeader.vue'

interface IProps {
  loading: boolean,
  items: Array<any>,
  loadingCopy: string,
  emptyCopy: string,
  headers: Array<{ label: string, class?: string | undefined }>
}

defineProps<IProps>();

</script>