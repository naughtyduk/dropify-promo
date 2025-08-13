import DefaultTheme from 'vitepress/theme'
import './overrides.css'
import HomeLegacy from './HomeLegacy.vue'

export default {
	...DefaultTheme,
	Layout: DefaultTheme.Layout,
	enhanceApp({ app }) {
		app.component('HomeLegacy', HomeLegacy)
	}
}


