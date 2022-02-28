<template>
  <!-- <div class="card shadow card-product"> -->
  <div class="card shadow card-product">
    <div class="card-header">
      <img
        :src="'assets/images/' + product.image"
        class="card-img-top"
        alt=""
      />
    </div>
    <!-- </div> -->
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">{{ product.price }}</p>
      <router-link :to="'foods/' + product.id" class="btn btn-warning">
        Add to cart
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardProduct',
  props: ['product'],
}
</script>

<style></style>
