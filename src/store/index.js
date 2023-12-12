import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    productsIncart: [],
  },
  getters: {
    isIncart: (state) => (productID) => {
      const foundProduct = state.productsIncart.find(
        (prod) => prod.id === productID
      );
      return !!foundProduct;
    },
    numberOfProductsInCart: (state) => {
      return state.productsIncart.length;
    },
    totalPrice: (state) => {
      return state.productsIncart.reduce(
        (sum, { price, quantity }) => sum + price * quantity,
        0
      );
    },
  },
  mutations: {
    updateCart(state, products) {
      state.productsIncart = products;
    },
    addProduct(state, product) {
      state.productsIncart = state.productsIncart.concat(product);
    },
    removeProduct(state, id) {
      state.productsIncart = state.productsIncart.filter(
        (prod) => prod.id !== id
      );
    },
    updateProductByID(state, payload) {
      const { items, id } = payload;
      const index = state.productsIncart.findIndex((prod) => prod.id === id);
      if (index !== -1) {
        state.productsIncart.splice(index, 1, {
          ...state.productsIncart[index],
          ...items,
        });
      }
    },
  },
  actions: {
    updateCart({ commit }, products) {
      commit("updateCart", products);
    },
    addProduct({ commit }, product) {
      if (!product.quantity) {
        product.quantity = 1;
      }
      if (!product.note) {
        product.note = null;
      }
      commit("addProduct", product);
    },
    removeProduct({ commit }, id) {
      commit("removeProduct", id);
    },
    updateProductByID({ commit }, payload) {
      commit("updateProductByID", payload);
    },
  },
  plugins: [createPersistedState()],
});

export default store;
