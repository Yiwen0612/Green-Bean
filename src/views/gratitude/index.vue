<template>
  <div class="gratitude-wrapper">
    <div class="gratitude-wrapper__title-main">
      <b></b><span>Order Confirmation & Gratitude Page</span><b></b>
    </div>
    <div>
      <p>
        Thank You for Your Purchase! Congratulations on your order! We want to
        express our sincere gratitude for choosing us. Your support means the
        world to us.
      </p>
      <p>
        We're excited to have the opportunity to serve you, and we can't wait to
        deliver an exceptional experience. Your trust in our products is
        invaluable, and we're committed to making sure your purchase lives up to
        your expectations.
      </p>
      <p>
        If you have any questions or need assistance, our dedicated support team
        is here to help. Feel free to reach out at 438.979.8803.
      </p>
      <p>
        Once again, thank you for your purchase. We're looking forward to making
        your experience remarkable.
      </p>
    </div>
    <router-link :to="PATH.PRODUCTS">
      <b-button variant="outline-dark" class="btn m-auto"
        >Continue Shopping<b-icon
          icon="arrow-right"
          style="margin-left: 8px"
        ></b-icon
      ></b-button>
    </router-link>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
