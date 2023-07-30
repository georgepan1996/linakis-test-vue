<script setup>
import {computed} from "vue";

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

const isUnavailable = computed(() => props.status === 'unavailable')
</script>

<template>
<div class="container">
  <div class="image" :style="{ 'background-image': 'url(' + imageUrl + ')' }">
  </div>
  <div class="title-with-description-and-actions">
    <div class="title-with-price">
      <div class="minimal-title">
          {{title}}
      </div>
      <div class="price">
          $ {{price}}
      </div>
    </div>
    <div v-if="isUnavailable" class="unavailable-box">
      Unavailable
    </div>
    <div class="description">
        {{description}}
    </div>
    <div class="action">
      <button :class="isUnavailable ? '' : 'add-to-cart-button'" :disabled="isUnavailable" @click="e => addToCart(
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
  padding: 20px 0;
  height: 160px;
}

.unavailable-box {
  border: 2px solid #d22449;
  color: #d22449;
  padding: 7.5px;
  background-color: white;
  font-weight: 540;
  line-height: 1;
  letter-spacing: 1px;
  position: absolute;
  font-size: 1.9rem;
  text-transform: uppercase;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  rotate: -10deg;
  font-family: "Arial";
}
.title-with-price {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-weight: 980;
}

.description {
  height: 75px;
  overflow: auto;
  color: #0d0000;
  font-size: 1.5rem;
}
.action {
  margin-top: 5px;
}
.image {
  width: 300px;
  background-size: cover;
  background-position: center;
}

.image img {
  max-height: 100%;
  max-width: 100%;
}

.title-with-description-and-actions {
  position: relative;
  width: 100%;
}

.add-to-cart-button {
  background-color: white;
  padding: 2px 4px;
  font-weight: 600;
  color: black;
  transition: background-color 0.2s ease-in-out;
}

.add-to-cart-button:hover {
  background-color: black;
  color: white;
  cursor: pointer;
}

.add-to-cart-button:active {
  background-color: white;
  color: black;
  cursor: pointer;
}

</style>
