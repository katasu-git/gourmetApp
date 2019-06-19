import Vue from "vue";
import VueRouter from "vue-router";
import Top from "./views/Top";
import Result from "./views/Result";
import Test from "./views/Test";
import GMap from "./views/Map";

Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        name: "top",
        component: Top
    },
    {
        path: "/result",
        name: "result",
        component: Result
    },
    {
        path: "/Gmap",
        name: "Gmap",
        component: GMap
    },
    {
        path: "/test",
        name: "test",
        component: Test
    }
];

export default new VueRouter({
    routes: routes
})

