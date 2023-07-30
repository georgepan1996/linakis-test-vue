<script setup>
import ProductForm from "./ProductForm.vue";
import NewProductForm from "./NewProductForm.vue";
import {storeToRefs} from "pinia";

import {useProductsStore} from "../stores/products.js";
const productsStore = useProductsStore();
const {products} = storeToRefs(productsStore)
</script>

<template>
<div>
  <div class="minimal-title">
    INVENTORY
  </div>
  <br>
  <div class="inventory-products">
    <ProductForm v-for="prod in products" :product="prod" :id="prod.id" :key="prod.id"/>
  </div>
  <div class="new-product">
    <div class="minimal-title">Add new product</div>
    <br>
    <NewProductForm/>
  </div>
</div>
</template>

<style scoped>

</style>
