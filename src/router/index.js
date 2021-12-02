import VueRouter from "vue-router"
import Main from "../components/Main"
import About from "../components/About"
import More from "../components/More"
import BeforeLog from "../components/BeforeLog"

export default new VueRouter({
    routes: [
        {
            path: "/Main",
            component: Main
        },
        {
            path: "/About",
            component: About
        },
        {
            path: "/More",
            component: More
        },
        {
            path: "/BeforeLog",
            component: BeforeLog
        }
    ]
})
