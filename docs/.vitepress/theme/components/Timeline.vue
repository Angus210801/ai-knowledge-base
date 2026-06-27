<template>
  <div class="timeline-container">
    <div v-for="(item, index) in items" :key="index" class="timeline-item">
      <div class="timeline-date">{{ item.date }}</div>
      <div class="timeline-content">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <div v-if="item.tags" style="margin-top: 8px;">
          <span v-for="tag in item.tags" :key="tag" 
                style="display: inline-block; padding: 2px 8px; margin-right: 6px; border-radius: 12px; font-size: 0.75rem; background: var(--vp-c-default-soft); color: var(--vp-c-text-2);">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>
