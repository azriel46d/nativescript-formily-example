import Vue from 'nativescript-vue';
import VueCompositionAPI from '@vue/composition-api';
Vue.use(VueCompositionAPI);
import { StackLayout } from '@nativescript/core';
Vue.registerElement('div', () => StackLayout);
Vue.registerElement('form', () => StackLayout);
import Home from './pages/Home.vue';

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__;

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start();
