
import './assets/css/main.scss';


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import HomePage from './pages/HomePage.vue'

import SpatialNavigation from 'spatial-navigation-js';

import VueSvgInlinePlugin from "vue-svg-inline-plugin";
import VueSpatialNavigation from "vue-spatialnavigation";

import { createRouter, createWebHashHistory  } from 'vue-router'

const pinia = createPinia()

const routes = [
  { path: '/', component: HomePage },
]

const router = createRouter({
  routes, // short for `routes: routes`
	history: createWebHashHistory()
})


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

createApp(App).use(router).use(VueSvgInlinePlugin, {
	attributes: {
		data: [ "src" ],
		remove: [ "alt" ]
	}
}).use(VueSpatialNavigation).use(pinia).mount('#app')
