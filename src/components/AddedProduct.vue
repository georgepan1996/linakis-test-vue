<script setup>
const props = defineProps({
  title: String,
  quantity: Number,
  price: Number
})

import {useProductsStore} from "../stores/products.js";
const productsStore = useProductsStore();
const {getTotalPrice} = productsStore

</script>


<template>
<div class="products-container">
  <div class="quantity-with-price">
    {{quantity}} X {{title}}
  </div>
    <div class="total-product-price">
      $ {{getTotalPrice(price, quantity)}}
    </div>
</div>
</template>

<style scoped>
.products-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid black;
  margin: 20px 0;
  padding-bottom: 20px;
}
</style>
