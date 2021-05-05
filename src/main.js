import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faChevronRight, faEnvelope, faFilePdf, faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

library.add(faEnvelope, faLinkedin, faArrowRight, faChevronRight, faCopyright, faPrint, faFilePdf)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount("#app");
