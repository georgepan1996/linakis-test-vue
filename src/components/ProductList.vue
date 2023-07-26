<script setup>
import Product from "./Product.vue";
import {useProductsStore} from "../stores/products.js";
import {storeToRefs} from "pinia";
const productsStore = useProductsStore();

const {products} = storeToRefs(productsStore)
</script>

<template>
  <div>
    <h2 class="category-title">== <span class="category-title-text">Our product list</span> ==</h2>
    <Product v-for="prod in products" :key="prod.id"
             :id="prod.id"
             :title="prod.title"
             :description="prod.description + ' ' + prod.id"
             :image-url="prod.imageUrl"
             :price="prod.price"
             :status="prod.status"
    />
  </div>
</template>

<style scoped>
.category-title {
  font-size: 1.7vw;
  font-family: 'Wix Madefor Display', sans-serif;
  text-align: center;
}
.category-title-text {
  letter-spacing: 2px;
  color: #fbdd7e;
}
</style>
