import Home from '../components/home/Home.vue'
import Login from "../components/auth/login/Login.vue"

export const routes = [
    { path: '/login', component: Login },
    {
        path: '/', component: Home,
        children: [
           
        ]
    },
]