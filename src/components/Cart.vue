<script setup>
import AddedProduct from "./AddedProduct.vue";
import {storeToRefs} from "pinia";

import {useProductsStore} from "../stores/products.js";
import {computed} from "vue";
const productsStore = useProductsStore();
const {addedToCart} = storeToRefs(productsStore)
const {getSum} = productsStore

const addedProductsPrice = computed(() => addedToCart.value.map(prod => prod.price * prod.quantity).reduce(getSum, 0))
</script>

<template>
<div>
  <div class="minimal-title">
    SHOPPING <wbr> CART
  </div>
  <AddedProduct
    v-for="prod in addedToCart"
    :key="prod.id"
    :title="prod.title"
    :quantity="prod.quantity"
    :price="prod.price"
  />
  <div class="total-price">
    <div class="total-text">
      Total:
    </div>
    <div class="price">
      $ {{addedProductsPrice.toFixed(2)}}
    </div>
  </div>
</div>
</template>

<style scoped>
.total-price {
  font-weight: 600;
  display: flex;
  justify-content: space-between;
}
</style>
