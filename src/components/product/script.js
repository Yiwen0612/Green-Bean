import NumberInput from "@/components/NumberInput";
import TextInput from "@/components/TextInput";
import PATH from "@/router/paths";

export default {
  name: "Product",
  props: {
    product: {
      type: Object,
      default() {
        return {
          id: null,
          name: "",
          imageUrl: "",
          description: "",
          originalPrice: null,
          onsale: false,
          discount: null,
          inventory: null,
        };
      },
    },
  },
  components: {
    NumberInput,
    TextInput,
  },
  data() {
    return {
      PATH,
    };
  },
  computed: {
    isIncart() {
      return this.$store.getters.isIncart(this.product.id);
    },
  },
  created() {},
  methods: {
    addToCart() {
      const myContent = (
        <div class="d-flex gap-4">
          <div>
            <img
              style="max-width: 48px; margin-right: 8px"
              src={this.product.imageUrl}
            ></img>
          </div>
          <div>
            <div>{this.product.name}</div>
            <div style="">Has been added to cart</div>
          </div>
        </div>
      );

      this.$bvToast.toast([myContent], {
        variant: "success",
        toaster: "b-toaster-top-center",
        autoHideDelay: 2000,
        appendToast: false,
        noCloseButton: true,
      });
      this.$store.dispatch("addProduct", this.product);
    },
  },
};
