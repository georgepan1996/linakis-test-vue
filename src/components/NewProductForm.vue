<script setup>
import {storeToRefs} from "pinia";

import {useProductsStore} from "../stores/products.js";
import {ref} from "vue";
const productsStore = useProductsStore();
const {products, product, addedToCart} = storeToRefs(productsStore);

let newProduct = ref({
  ...product.value
})

function getFieldValue(field) {
  if(field === 'price') {
    return convertPrice(newProduct.value.price, 'string')
  } else {
    return newProduct.value[field]
  }
}
function convertPrice(price, type) {
  if(type === 'string') {
    return (price*100).toFixed(0)
  }
  if(type === 'number') {
    const fixedPrice = Number((Number(price)/100).toFixed(2))
    return fixedPrice
  }
}
function updateField(field, value) {
  if(field === 'price') {
    newProduct.value.price =  convertPrice(value, 'number')
  } else {
    newProduct.value[field] = value
  }
}

const reRenderForm = ref(0)
function addProduct() {
  console.log('new prod', newProduct.value)
  newProduct.value.id = products.value.length + 1
  const prodToAdd = {...newProduct.value}
  products.value.push(prodToAdd)
  newProduct.value = {...product.value}
  reRenderForm.value++
}
</script>

<template>
  <div>
    <table class="product-form-table" :key="reRenderForm">
      <tr>
        <td>
          <input
              placeholder="Title"
              class="field"
              :value="getFieldValue('title')"
              @input="e => updateField( 'title', e.target.value)">
        </td>
        <td>
          <input
              placeholder="Price"
              class="field"
              :value="getFieldValue('price')"
              @input="e => updateField( 'price', e.target.value)">
        </td>
        <td>
          <select  class="field"
                   :value="getFieldValue('status')"
                   @input="e => updateField('status', e.target.value)"
          >
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </td>
      </tr>
      <tr>
        <td colspan="3">
        <textarea
            :value="getFieldValue('description')"
            placeholder="Desc"
            class="field"
            @input="e => updateField('description', e.target.value)"
        >
        </textarea>
        </td>
      </tr>
      <tr>
        <td colspan="3">
          <input
              :value="newProduct.imageUrl"
              placeholder="Image"
              class="field"
              @input="e => updateField('imageUrl', e.target.value)"
          >
        </td>
      </tr>
      <tr>
        <td colspan="3">
          <button
              class="field add-new-product"
              @click="addProduct"
          >ADD NEW PRODUCT</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>

.add-new-product {
  background-color: white;
  padding: 2px 4px;
  font-weight: 600;
  color: black;
  transition: background-color 0.2s ease-in-out;
}

.add-new-product:hover {
  background-color: black;
  color: white;
  cursor: pointer;
}

.add-new-product:active {
  background-color: white;
  color: black;
  cursor: pointer;
}
</style>
