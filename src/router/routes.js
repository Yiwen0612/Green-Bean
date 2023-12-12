import PATH from "./paths";
export default [
  { path: PATH.ROOT, name: 'Home', component: () => import("@/views/home") },
  { path: PATH.PRODUCTS, name:'Product', component: () => import("@/views/products") },
  { path: PATH.CART, name: 'Cart', component: () => import("@/views/cart") },
  { path: PATH.CHECKOUT,name:'Checkout', component: () => import("@/views/checkout") },
  { path: PATH.GRATITUDE, name:'Gratitude',component: () => import("@/views/gratitude") },
];
