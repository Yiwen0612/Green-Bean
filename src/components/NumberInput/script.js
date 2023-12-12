export default {
  name: "NumberInput",
  props: {
    value: {
      type: Number,
      default: 1,
    },
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 9999,
    },
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    onChange(value) {
      if (value < this.min || value > this.max) {
        return;
      }
      this.$emit("input", value);
      this.$emit("onChange", value);
    },
    inputChange(event) {
      if (event.target.value > this.max || event.target.value < this.min) {
        return;
      }
      const number = Number(event.target.value);
      if (Number.isInteger(number)) {
        this.onChange(Number(event.target.value));
      }
    },
  },
};
