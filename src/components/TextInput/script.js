export default {
  name: "TextInput",
  props: {
    value: {
      type: String,
      default: "",
    },
    showRemainCharacter: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "Input your content",
    },
    maxlength: {
      type: Number,
      default: 25,
    },
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    label() {
      const counter = this.maxlength - (this.value ? this.value.length : 0);
      return this.maxlength === counter
        ? `${counter} Characters`
        : `${counter} Characters left`;
    },
  },
  created() {},
  mounted() {},
  methods: {
    onChange(value) {
      this.$emit("input", value);
      this.$emit("onChange", value);
    },
  },
};
