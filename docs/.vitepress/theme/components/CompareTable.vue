<template>
  <div style="overflow-x: auto;">
    <table class="compare-table">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key">{{ col.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <td v-for="col in columns" :key="col.key">
            <span v-if="col.key === 'openSource'">
              <span v-if="row[col.key]" style="color: #10b981;">✓ 开源</span>
              <span v-else style="color: #f59e0b;">✗ 闭源</span>
            </span>
            <span v-else-if="col.key === 'multimodal'">
              <span v-if="row[col.key]" style="color: #8b5cf6;">✓ 支持</span>
              <span v-else>✗</span>
            </span>
            <span v-else>{{ row[col.key] }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  columns: {
    type: Array,
    required: true
  },
  data: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>
