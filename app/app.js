import Vue from "nativescript-vue";

import routes from "./routes";

export const EventBus = new Vue();


Vue.config.silent = false;

new Vue({
    render: h => h("frame", [h(routes.home)])
  }).$start();