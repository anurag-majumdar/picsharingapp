import Home from '../components/home/Home.vue'
import Login from "../components/auth/Login.vue"

export const routes = [
    {
        path: '/', component: Home,
        children: [
            { path: 'login', component: Login },
        ]
    },
]