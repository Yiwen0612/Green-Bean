<template>
  <div class="products-wrapper">
    <div class="products-wrapper__title-main">
      <b></b><span>Our products</span><b></b>
    </div>
    <b-skeleton-wrapper :loading="loading">
      <template #loading>
        <div class="products-container">
          <div class="cart-container" v-for="index in 3" :key="index">
            <div class="pb-4">
              <b-skeleton-img aspect="1:1" width="100%"></b-skeleton-img>
            </div>
            <b-skeleton width="60%"></b-skeleton>
            <b-skeleton width="100%"></b-skeleton>
            <b-skeleton width="100%"></b-skeleton>
            <b-skeleton width="10%"></b-skeleton>
          </div>
        </div>
      </template>

      <div class="products-container">
        <Product
          v-for="product in products"
          :product="product"
          :key="product.id"
          :loading="loading"
        ></Product>
      </div>
    </b-skeleton-wrapper>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
