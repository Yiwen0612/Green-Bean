import NumberInput from "@/components/NumberInput";
import TextInput from "@/components/TextInput";
import Table from "@/components/Table";
import PATH from "@/router/paths";
import { formatCurrency } from "@/utils";

export default {
  name: "Checkout",
  components: {
    Table,
    NumberInput,
    TextInput,
  },
  data() {
    return {
      PATH,
      fields: [
        {
          key: "item",
          label: "Item",
        },
        {
          key: "subtotal",
          label: "Total Price",
          thClass: "max-content",
          tdClass: "align-middle",
        },
      ],
      billInfo: {
        shippingMethod: "pickup", // pickup || delivery
        paymentMethod: "later",
        name: "",
        email: "",
        phone: "",
      },
      isInBilling: false,
      check: false,
      isMobile: false,
    };
  },
  computed: {
    products() {
      return this.$store.state.productsIncart;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
    shippingFee() {
      return this.billInfo.shippingMethod === "pickup" ? 0 : 2;
    },
    nameState() {
      if (!this.check) {
        return null;
      }
      return this.billInfo.name.length > 0 ? true : false;
    },
    phoneState() {
      if (!this.check) {
        return null;
      }
      return /^(03|05|07|08|09)[0-9]{8}$/.test(this.billInfo.phone);
    },
  },
  created() {},
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    checkout() {
      if (!this.isInBilling) {
        this.isInBilling = true;
      } else {
        this.$refs.form.requestSubmit();
      }
    },
    formatValue(val) {
      return formatCurrency(val);
    },
    onSubmit() {
      this.check = true;
      if (this.nameState) {
        // clear cart
        this.$router.push(PATH.GRATITUDE).then(() => {
          this.$store.dispatch("updateCart", []);
        });
      }
    },
    onResize() {
      this.isMobile = window.innerWidth < 768;
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize, { passive: true });
  },
};
