import NumberInput from "@/components/NumberInput";
import TextInput from "@/components/TextInput";
import Table from "@/components/Table";
import PATH from "@/router/paths";
import { formatCurrency } from "@/utils";
import emailjs from 'emailjs-com';
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
        address: "",
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
      return this.billInfo.shippingMethod === "pickup" ? 0 : 0;
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
      return /^(\(\d{3}\) ?|\d{3}[-.]?)\d{3}[-.]?\d{4}$/.test(this.billInfo.phone);
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
        this.sendEmail()
        this.$router.push(PATH.GRATITUDE).then(() => {
          this.$store.dispatch("updateCart", []);
        });
      }
    },
    onResize() {
      this.isMobile = window.innerWidth < 768;
    },


    sendEmail() {
      // eslint-disable-next-line no-unused-vars
      let emailContent = ''
      this.$store.state.productsIncart.forEach((item, index) => {
        emailContent += `Item ${index + 1}:\n`;
        emailContent += `- Name: ${item.name}\n`;
        emailContent += `- Quantity: ${item.quantity}\n`;
        // Include other necessary details like imageurl, description, etc. if needed
        emailContent += `\n`;
      })
      let templateParams = {
        name: this.billInfo.name,
        email: this.billInfo.email,
        phone: this.billInfo.phone,
        address: this.billInfo.address,
        message: emailContent,
        price: this.$store.getters.totalPrice
      };
      emailjs.send('service_rekna4m', 'template_lgterdr', templateParams,
        'nmSooxOzfp6ejjO95') .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });

    },
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize, { passive: true });
  },
};
