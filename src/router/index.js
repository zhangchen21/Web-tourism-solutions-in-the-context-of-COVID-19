import VueRouter from "vue-router"
import Main from "../components/Main"
import About from "../components/About"

export default new VueRouter({
    routes: [
        {
            path: "/main",
            component: Main
        },
        {
            path: "/about",
            component: About
        },
    ]
})
