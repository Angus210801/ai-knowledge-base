<template>
  <div class="model-card">
    <div class="model-card-header">
      <h3>{{ name }}</h3>
      <span v-if="openSource" class="model-badge badge-open">开源</span>
      <span v-else class="model-badge badge-closed">闭源</span>
      <span v-if="multimodal" class="model-badge badge-multimodal">多模态</span>
    </div>
    <p v-if="description">{{ description }}</p>
    <div class="model-meta">
      <div v-if="params" class="model-meta-item">
        <div class="label">参数规模</div>
        <div class="value">{{ params }}</div>
      </div>
      <div v-if="releaseDate" class="model-meta-item">
        <div class="label">发布日期</div>
        <div class="value">{{ releaseDate }}</div>
      </div>
      <div v-if="company" class="model-meta-item">
        <div class="label">开发方</div>
        <div class="value">{{ company }}</div>
      </div>
      <div v-if="contextWindow" class="model-meta-item">
        <div class="label">上下文窗口</div>
        <div class="value">{{ contextWindow }}</div>
      </div>
    </div>
    <div v-if="$slots.default" style="margin-top: 16px;">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  description: { type: String, default: '' },
  openSource: { type: Boolean, default: false },
  multimodal: { type: Boolean, default: false },
  params: { type: String, default: '' },
  releaseDate: { type: String, default: '' },
  company: { type: String, default: '' },
  contextWindow: { type: String, default: '' }
})
</script>
