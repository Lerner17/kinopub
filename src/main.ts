require('polyfill-object.fromentries');


import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import SpatialNavigation from 'spatial-navigation-js';

import router from './router'
import App from './App.vue';
import vuetify from './plugins/vuetify';

import { VueQueryPlugin } from '@tanstack/vue-query';
import { loadFonts } from './plugins/webfontloader';

import DefaultLayout from '@/layouts/DefaultLayout.vue';
import LoginRequiredLayout from '@/layouts/LoginRequiredLayout.vue';
import { useAuthStore } from '@/stores/Auth.store';

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

router.beforeEach((to, from, next) => {
	const store = useAuthStore();
	if (!store.access_token && to.name !== 'Login') {
		next({ name: 'Login' })
	}
	next();
})

createApp(App)
  .component('default-layout', DefaultLayout)
  .component('login-required-layout', LoginRequiredLayout)
	.use(VueQueryPlugin)
  .use(router)
  .use(createPinia().use(piniaPluginPersistedstate))
  .use(vuetify)
  .mount('#app')
