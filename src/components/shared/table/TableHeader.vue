<template>
    <thead>
      <tr class="bg-neutral-200 border-b text-gray-700 uppercase bg-gray-50">
        <th
          class="px-3 py-3"
          :class="header.class"
          v-for="header in headers"
          :key="`header-${header.label}`"
        >
          {{ header.label }}
        </th>
      </tr>
    </thead>
</template>
<script setup lang="ts">
interface IProps {
  headers: Array<{ label: string, class?: string | undefined}>
};

defineProps<IProps>();

</script>