<template>
  <div class="data-source" v-if="lastUpdated">
    <span class="data-source-item">📅 最后更新: {{ lastUpdated }}</span>
    <span v-if="source" class="data-source-item">
      📎 <a :href="source" target="_blank" rel="noopener">来源</a>
    </span>
    <span v-if="verified" class="data-source-item" style="color: #10b981;">✓ 已验证</span>
    <span v-if="outdated" class="data-source-item" style="color: #f59e0b;">⚠ 可能过时</span>
  </div>
</template>

<script setup>
defineProps({
  lastUpdated: { type: String, default: '' },
  source: { type: String, default: '' },
  verified: { type: Boolean, default: false },
  outdated: { type: Boolean, default: false }
})
</script>
