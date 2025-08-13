import DefaultTheme from 'vitepress/theme'
import './overrides.css'
import HomeLegacy from './HomeLegacy.vue'

export default {
	...DefaultTheme,
	Layout: DefaultTheme.Layout,
	enhanceApp({ app, router }) {
		app.component('HomeLegacy', HomeLegacy)
		
		// Add sidebar footer functionality
		if (typeof window !== 'undefined') {
			function addSidebarFooter() {
				const sidebar = document.querySelector('.VPSidebar .nav')
				if (sidebar && !document.querySelector('.sidebar-footer')) {
					const footer = document.createElement('div')
					footer.className = 'sidebar-footer'
					footer.innerHTML = 'Built by <a href="https://naughtyduk.com" target="_blank" rel="noopener">NaughtyDuk©</a>'
					sidebar.appendChild(footer)
				}
			}
			
			// Add footer on route changes
			router.onAfterRouteChanged = () => {
				setTimeout(addSidebarFooter, 100)
			}
			
			// Initial load
			setTimeout(addSidebarFooter, 100)
		}
	}
}


