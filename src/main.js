import { createApp } from 'vue'
import '@/assets/styles.scss';
import App from '@/App.vue'
import intersect from '@/directives/intersect.js';

createApp(App)
.directive('intersect', intersect)
.mount('#app')
