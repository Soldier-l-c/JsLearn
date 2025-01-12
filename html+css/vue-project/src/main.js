import htmltest from "./main.vue"

import Vue from "vue"

Vue.component("htmltest", htmltest)

new Vue({
    render: h => h(htmltest),
  }).$mount('#htmltest');


