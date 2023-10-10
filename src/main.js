
import './assets/css/main.scss';


import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import store from '@/store'

import App from './App.vue'

import HomePage from './pages/HomePage.vue';
// import VideoPage from './pages/VideoPage.vue';
// import DefaultLayout from '@/layouts/DefaultLayout.vue';
// import FullScreenLayout from '@/layouts/FullScreenLayout.vue';

import MoviePage from './pages/MoviePage.vue';

import SpatialNavigation from 'spatial-navigation-js';

import VueSvgInlinePlugin from "vue-svg-inline-plugin";
import VueSpatialNavigation from "vue-spatialnavigation";

import { createRouter, createWebHashHistory  } from 'vue-router'
// import PlayerLayoutVue from './layouts/PlayerLayout.vue';

// const pinia = createPinia()

const routes = [
  { path: '/', component: HomePage },
  // {
	// 	path: '/video',
	// 	component: VideoPage,
	// 	// meta:{
	// 	// 	layout: 'player-layout'
	// 	// },
	// },
  {
		path: '/movie/:id',
		component: MoviePage,
		// meta:{
		// 	layout: 'fullscreen-layout'
		// },
	},
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

createApp(App)
	// .component('default-layout', DefaultLayout)
	// .component('player-layout', PlayerLayoutVue)
	// .component('fullscreen-layout', FullScreenLayout)
	.use(router)
	.use(store)
	.use(VueSvgInlinePlugin, {
	attributes: {
		data: [ "src" ],
		remove: [ "alt" ]
	}
})
.use(VueSpatialNavigation).mount('#app')
