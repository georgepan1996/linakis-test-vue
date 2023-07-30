<script setup>
import ProductList from "./components/ProductList.vue";
import Cart from "./components/Cart.vue";
import Inventory from "./components/Inventory.vue";
</script>

<template>
  <div class="sections-container">
    <div class="section products">
      <ProductList/>
    </div>
    <div class="section cart">
      <Cart />
    </div>
    <div class="section inventory">
      <Inventory/>
    </div>
  </div>
</template>

<style scoped>
.sections-container {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  flex-wrap: wrap;
  height: 100%;
}

@media only screen and (max-width: 1300px) {
  .sections-container {
    flex-direction: column;
  }
}
.products, .inventory {
  flex: 2;
}
.cart {
  flex: 1;
}
.section {
  border: 2px solid black;
  border-collapse: collapse;
  padding: 20px;
  height: 100%;
  overflow: auto;
  outline: white solid 5px;
}
.double-border {
  display: block;
  clear: both;
  background: red;
  border: 5px solid yellow;
  outline: 5px solid blue;
  height: 50px;
  width: 50px;
}
</style>
