import Product from "@/components/product";

export default {
  name: "Home",
  components: {
    Product,
  },
  data() {
    return {
      products: [],
      loading: false,
    };
  },
  computed: {},
  created() {
    this.loading = true;
    // this.$businessApi.getProducts()
    //   .then((res) => {
    //     console.log(res)
    //     if(res&&res.status===200){
    //     this.products = res.data.filter((cake) => cake.inventory > 0)
    //         .map((item) => {
    //           return {
    //             ...item,
    //             price: item.onsale
    //               ? item.discount
    //               : item.originalPrice,
    //           };
    //         });
    //     }
    //   })
    //   .finally(() => {
    //     this.loading = false;
    //   });
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        // filter available cakes
        this.products = data
          .filter((cake) => cake.inventory > 0)
          .map((item) => {
            return {
              ...item,
              price: item.onsale
                ? item.discount
                : item.originalPrice,
            };
          });
      })
      .finally(() => {
        this.loading = false;
      });

  },

  methods: {},
};
