<script setup>
const props = defineProps({
  id: Number,
  title: String,
  price: Number,
  status: String,
  description: String,
  imageUrl: String
})
import {useProductsStore} from "../stores/products.js";
const productsStore = useProductsStore();
const {addToCart} = productsStore
</script>

<template>
<div class="container">
  <div class="image">
    <img :src="imageUrl" :alt="title">
  </div>
  <div class="title-with-description-and-actions">
    <div class="title-with-price">
      <div class="title">
          {{title}}
      </div>
      <div class="price">
          $ {{price}}
      </div>
    </div>
    <div v-if="status === 'Unavailable'" class="unavailable-box">
      Unavailable
    </div>
    <div class="description">
        {{description}}
    </div>
    <div class="action">
      <button :disabled="status === 'Unavailable'" @click="e => addToCart(
          {
          id,
          title,
          price,
          status,
          description,
          imageUrl
          }
      )">ADD TO CART</button>
    </div>
  </div>
</div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  gap: 15px;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  margin-bottom: 20px;
  padding: 10px;
  height: 200px;
}

.unavailable-box {
  border: 2px solid red;
  color: red;
  background-color: white;
  font-weight: 600;
  position: absolute;
  font-size: 1.5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title-with-price {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 600;
}

.title {
  font-size: 1.3rem;
}
.description {
  height: 130px;
  overflow: auto;
}
.action {
  margin-top: 5px;
}
.image {
  width: 300px;
  overflow: clip;
  text-align: center;
}

.image img {
  max-height: 100%;
  max-width: 100%;
}

.title-with-description-and-actions {
  position: relative;
  width: 100%;
}

</style>
