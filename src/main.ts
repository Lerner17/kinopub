import { createApp } from 'vue';
import { createPinia } from 'pinia';

import router from './router'
import App from './App.vue';
import vuetify from './plugins/vuetify';

import { loadFonts } from './plugins/webfontloader';

import SpatialNavigation from 'spatial-navigation-js';


window.addEventListener('load', function() {
	SpatialNavigation.init();
 
	// Define navigable elements (anchors and elements with "focusable" class).
	SpatialNavigation.add({
		selector: 'a, .focusable'
	});

	// Make the *currently existing* navigable elements focusable.
	SpatialNavigation.makeFocusable();

	// Focus the first navigable element.
	SpatialNavigation.focus();
})

loadFonts()

createApp(App)
  .use(router)
  .use(createPinia())
  .use(vuetify)
  .mount('#app')
