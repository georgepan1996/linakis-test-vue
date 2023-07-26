import {createRouter, createWebHistory} from 'vue-router'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/product_list',
            name: 'product_list',
            component: () => import('../components/ProductList.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('../components/Cart.vue')
        },
    ]
})

export default router
