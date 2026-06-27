# 术语表 {#glossary}

AI大模型领域的关键术语解释。

<script setup>
import glossaryData from './data/glossary.json'

const letters = [...new Set(glossaryData.map(t => t.letter))].sort()
const grouped = {}
glossaryData.forEach(t => {
  if (!grouped[t.letter]) grouped[t.letter] = []
  grouped[t.letter].push(t)
})
</script>

> 📊 数据驱动 · 共收录 **{{ glossaryData.length }}** 个术语

---

<template v-for="letter in letters" :key="letter">

## {{ letter }}

<div v-for="term in grouped[letter]" :key="term.id">

### {{ term.term }}（{{ term.termZh }}）
{{ term.definition }}
<span v-if="term.relatedPage"> 详见<a :href="term.relatedPage">{{ term.term }}</a>。</span>

</div>

---

</template>

> 💡 如果有术语遗漏，欢迎补充！
