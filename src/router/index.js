import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodsView from '../views/FoodsView.vue'
import FoodDetailView from '../views/FoodDetailView.vue'
import CartView from '../views/CartView.vue'
import OrderSuccess from '../views/OrderSuccess.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'HomeView',
        component: HomeView,
    },
    {
        path: '/foods',
        name: 'FoodsView',
        component: FoodsView,
    },
    {
        path: '/foods/:id',
        name: 'FoodDetailView',
        component: FoodDetailView,
    },
    {
        path: '/carts/',
        name: 'Cart',
        component: CartView,
    },
    {
        path: '/order-success/',
        name: 'OrderSuccess',
        component: OrderSuccess,
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router