import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Timeline from './components/Timeline.vue'
import ModelCard from './components/ModelCard.vue'
import CompareTable from './components/CompareTable.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Timeline', Timeline)
    app.component('ModelCard', ModelCard)
    app.component('CompareTable', CompareTable)
  }
}
