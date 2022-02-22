import VueRouter from "vue-router"
import Main from "../components/Main"
import About from "../components/About"
import More from "../components/More"
import BeforeLog from "../components/BeforeLog"
import Log from "../components/Login"
import Xian from "../components/Xian"
import Xiamen from "../components/Xiamen"

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/Main'
        },
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
        },
        {
            path: "/Log",
            component: Log
        },
        {
            path: "/Xian",
            component: Xian
        },
        {
            path: "/Xiamen",
            component: Xiamen
        },
    ]
})
