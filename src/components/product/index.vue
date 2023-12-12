<template>
  <div class="cart-container" v-b-modal="`modal-scrollable-${product.id}`">
    <div v-if="product.onsale" class="ribbon-wrapper">
      <div class="ribbon">Sale</div>
    </div>
    <div class="cart-container__image">
      <img :src="product.imageUrl" alt="" />
    </div>
    <div class="cart-container__title">{{ product.name }}</div>
    <div class="cart-container__description">{{ product.description }}</div>
    <div class="cart-container__price">
      <span :class="product.onsale && 'discount'"
        >{{ product.originalPrice }}$</span
      >
      <span v-if="product.onsale">{{ product.discount }}$</span>
    </div>
    <span class="cart-container__action">
      <button @click.stop="addToCart" class="btn" v-if="!isIncart">
        <b-icon icon="cart-plus" style="width: 24px; height: 24px"></b-icon>
      </button>
      <router-link v-else :to="PATH.CART">
        <button class="btn">View cart</button>
      </router-link>
    </span>
    <b-modal
      :id="`modal-scrollable-${product.id}`"
      scrollable
      centered
      size="lg"
      :title="product.name"
    >
      <div class="product-detail-wrapper">
        <div class="left-content">
          <img :src="product.imageUrl" alt="" />
        </div>
        <div class="right-content">
          <div class="cart-container__description">
            {{ product.description }}
          </div>
          <div class="cart-container__price">
            <span :class="product.onsale && 'discount'"
              >{{ product.originalPrice }}$</span
            >
            <span v-if="product.onsale"
              >{{ product.discount }}$</span
            >
          </div>
          <div class="cart-container__stock">
            {{ product.inventory }} in stock
          </div>
        </div>
      </div>
      <template #modal-footer>
        <div class="footer__action">
          <b-button
            @click.stop="addToCart"
            variant=""
            class="btn"
            v-if="!isIncart"
          >
            <span class="mr-2">Add to cart</span
            ><b-icon
              icon="cart-plus"
              style="width: 24px; height: 24px"
            ></b-icon>
          </b-button>
          <router-link v-else :to="PATH.CART">
            <b-button class="btn">View Cart</b-button>
          </router-link>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
