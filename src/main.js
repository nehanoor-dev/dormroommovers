import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.css'
import Utils from './mixins/Utils'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSquarePlus, faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import naive from 'naive-ui';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import lib from 'naive-ui'
library.add(faYoutube);
library.add(faBars);
library.add(faCaretRight);
library.add(faStar);
library.add(faGoogle);
library.add(faHeadphones);
library.add(faEnvelope);
library.add(faMessage);
library.add(faMagnifyingGlass);
library.add(faCircleQuestion);
library.add(faSquarePlus, faSquareMinus)
library.add(faFacebookF, faInstagram, faTiktok);

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia())
app.use(naive);
app.use(router)

app.mount('#app')
