<template>
  <b-navbar toggleable="sm" fixed="top" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <b-navbar-brand>
      <router-link :to="PATH.ROOT"> CL CAKE </router-link>
    </b-navbar-brand>
    <b-navbar-brand class="cart">
      <router-link :to="PATH.CART">
        <div v-if="counter > 0" class="cart__counter">{{ counter }}</div>
        <b-icon icon="cart" style="width: 20px; height: 20px"></b-icon>
      </router-link>
    </b-navbar-brand>

    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="PATH.ROOT"><span>Home</span></b-nav-item>
        <b-nav-item :to="PATH.PRODUCTS"><span>Products</span></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>

// .navbar-nav { // padding-top: 16px; // padding-left: 4px; // gap: 4px; //
font-size: large; // .nav-item .router-link-exact-active { // span { //
position: relative; // &::after { // position: absolute; // content: ""; //
background: rgba($color: $color-yellow--origin, $alpha: 0.4); // border-radius:
4px; // height: 6px; // top: 70%; // left: -4px; // right: -4px; // } // } // }
// }
