/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


import ArticleIndex from "./components/articles/ArticleIndex";

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import Home from "./components/home/Home";
import UserIndex from "./components/users/UserIndex";

Vue.use(VueRouter);

Vue.component('App', require('./components/App.vue').default);

const routes = [
    { path: '/', component: Home },
    { path: '/articles', component: ArticleIndex },
    { path: '/users', component: UserIndex },
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    router: router
});
