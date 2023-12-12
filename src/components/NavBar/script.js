import PATH from "@/router/paths";

export default {
  name: "NavBar",
  props: {},
  components: {},
  data() {
    return {
      PATH,
    };
  },
  computed: {
    counter() {
      return this.$store.getters.numberOfProductsInCart;
    },
  },
  created() {},
  methods: {},
};
