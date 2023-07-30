<script setup>
import Product from "./Product.vue";
import {useProductsStore} from "../stores/products.js";
import {storeToRefs} from "pinia";
const productsStore = useProductsStore();

const {products} = storeToRefs(productsStore)
</script>

<template>
  <div class="product-list">
    <div class="company-logo">FISH STORE</div>
    <div class="our-products-title minimal-title">== <span class="our-products-title-text">Our product list</span> ==</div>
    <Product v-for="prod in products" :key="prod.id"
             :id="prod.id"
             :title="prod.title"
             :description="prod.description"
             :image-url="prod.imageUrl"
             :price="prod.price"
             :status="prod.status"
    />
  </div>
</template>

<style scoped>
.main-header {
  text-align: center;
  padding-top: 20px;
  text-transform: uppercase;
}
.company-logo {
  letter-spacing: 8px;
  font-weight: 100;
  font-size: 5rem;
  font-family: 'Space Grotesk', sans-serif;
  text-align: center;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 3.5px;
  -webkit-text-stroke-color: black;
  transform:scale(0.7,1.0);
}

.product-list .our-products-title {
  font-size: 1.3rem;
  font-family: 'Wix Madefor Display', sans-serif;
  text-align: center;
}
.our-products-title-text {
  letter-spacing: 2px;
  color: #ee9f29;
  font-weight: 700;
}
</style>
