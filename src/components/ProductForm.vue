<script setup>
import {storeToRefs} from "pinia";

const props = defineProps({
  product: Object
})

import {useProductsStore} from "../stores/products.js";
const productsStore = useProductsStore();
const {products, addedToCart} = storeToRefs(productsStore)

function convertPrice(price, type) {
  if(type === 'string') {
    return (price*100).toFixed(0)
  }
  if(type === 'number') {
    const fixedPrice = Number((Number(price)/100).toFixed(2))
    const productFromCartIndex = addedToCart.value.findIndex(prod => prod.id === props.product.id)
    if(productFromCartIndex > -1) {
      addedToCart.value[productFromCartIndex].price = fixedPrice
    }
    return fixedPrice
  }
}

function getFieldValue(field) {
  if(field === 'price') {
    return convertPrice(props.product.price, 'string')
  } else {
    return props.product[field]
  }
}
function updateField(field, value) {
  if(field === 'price') {
    props.product.price =  convertPrice(value, 'number')
  } else {
    props.product[field] = value
  }
}

</script>

<template>
<div>
  <table class="product-form-table">
    <tr>
      <td>
        <input
            class="field"
            :value="getFieldValue('title')"
            @input="e => updateField( 'title', e.target.value)">
      </td>
      <td>
        <input
            class="field"
            :value="getFieldValue( 'price')"
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
            class="field"
            :value="getFieldValue('description')"
            @input="e => updateField('description', e.target.value)"
        >
        </textarea>
      </td>
    </tr>
    <tr>
      <td colspan="3">
        <input
            class="field"
            :value="getFieldValue('imageUrl')"
            @input="e => updateField('imageUrl', e.target.value)"
            >
      </td>
    </tr>
  </table>
</div>
</template>

<style scoped>
</style>
