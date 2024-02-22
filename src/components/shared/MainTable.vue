<template>
  <table class="table-fixed border-collapse w-full border-0 bg-inherit text-sm shadow-sm">
    <table-header :headers="headers" />
    <tbody>
      <tr v-if="loading" >
        <td colspan="3" class="px-3 py-3 text-slate-500 text-slate-400 text-center" data-test="table-loading">
          {{ loadingCopy }}
        </td>
      </tr>
      <tr v-else-if="items.length === 0" >
        <td colspan="3" class="px-3 py-3 text-slate-500 text-slate-400 text-center" data-test="table-empty">
          {{ emptyCopy }}
        </td>
      </tr>
      <tr
        v-else
        class="border-b"
        v-for="item in items"
        :key="`item-${item.id}`"
        :data-test="`item-${item.id}`"
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