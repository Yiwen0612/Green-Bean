<template>
  <span
    class="input-wrapper"
    :data-before-content="showRemainCharacter && label"
  >
    <input
      type="text"
      :value="value"
      :placeholder="placeholder"
      :maxlength="maxlength"
      @input="onChange($event.target.value)"
    />
  </span>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
