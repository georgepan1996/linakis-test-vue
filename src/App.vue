<script setup>
import {storeToRefs} from "pinia";
import {computed} from "vue";

import  {useProductsStore} from "./stores/products.js";
const productsStore = useProductsStore()
const {addedToCart} = storeToRefs(productsStore)
const {getSum} = productsStore

import {useRouter} from "vue-router";
const router = useRouter();

console.log({router})
function goToCart () {
  router.push(
      {name: 'cart'}
  )
}

const addedProductsNum = computed(() => addedToCart.value.map(prod => prod.quantity).reduce(getSum, 0))
</script>

<template>
  <div>
    <header class="main-header">
      <h1 class="company-logo">FISH STORE</h1>
      <div class="cart" @click="goToCart">Cart ({{addedProductsNum}})</div>
    </header>
    <nav>
      <div class="link">
        <router-link :to="'/product_list'">Products</router-link>
      </div>

    </nav>
    <main>
      <router-view />
    </main>
    <footer>

    </footer>
  </div>
</template>

<style scoped>
.main-header {
  text-align: center;
  padding-top: 20px;
  text-transform: uppercase;
}
.company-logo {
  letter-spacing: 5px;
  font-size: 5vw;
  font-family: 'Quicksand', sans-serif;
}
.cart {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  position: fixed;
  top: 20px;
  right: 20px;
}
.cart:hover {
  cursor: pointer;
  color: #fbdd7e;
}

.link {
  text-align: center;
  text-decoration: none;
  font-size: 1.5rem;

}
</style>
