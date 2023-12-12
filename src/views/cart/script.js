import NumberInput from "@/components/NumberInput";
import TextInput from "@/components/TextInput";
import Table from "@/components/Table";
import { formatCurrency } from "@/utils";
import PATH from "@/router/paths";

export default {
  name: "Cart",
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
          thClass: "d-none d-sm-table-cell",
        },
        {
          key: "price",
          label: "Price",
          tdClass: "align-middle",
          class: "d-none d-sm-table-cell",
        },
        {
          key: "quantity",
          label: "Quantity",
          tdClass: "align-middle",
          class: "d-none d-sm-table-cell",
        },
        {
          key: "subtotal",
          label: "Total Price",
          tdClass: "align-middle",
          class: "d-none d-sm-table-cell",
        },
        {
          key: "action",
          label: "",
          tdClass: "align-middle",
          class: "d-none d-md-table-cell",
        },
      ],
      inputTest: 0,
    };
  },
  computed: {
    products() {
      console.log(this.$store.state.productsIncart)
      return this.$store.state.productsIncart;
    },
  },
  created() {},
  methods: {
    handleChangeQuantity(id, quantity) {
      this.$store.dispatch("updateProductByID", { id, items: { quantity } });
    },
    handleChangeNote(id, note) {
      this.$store.dispatch("updateProductByID", { id, items: { note } });
    },
    handleDeleteProduct(id) {
      // this.$bvToast.toast(`Removed from cart`, {
      //   variant: "success",
      //   toaster: "b-toaster-top-center",
      //   autoHideDelay: 2000,
      //   appendToast: false,
      //   noCloseButton: true,
      // });
      this.$store.dispatch("removeProduct", id);
    },
    formatValue(val) {
      return formatCurrency(val);
    },
  },
};
