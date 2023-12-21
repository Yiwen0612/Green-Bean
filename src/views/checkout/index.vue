<template>
  <div
    class="checkout-wrapper"
    :style="{ paddingBottom: isMobile ? (isInBilling ? '136px' : '88px') : '' }"
  >
    <template v-if="products.length">
      <b-container class="p-0">
        <b-row>
          <b-col cols="12" md="5" :class="isInBilling && isMobile && 'd-none'">
            <div class="checkout-wrapper__title-main">
              <b></b><span>Order Summary</span><b></b>
            </div>
            <Table :items="products" :fields="fields">
              <template #cell(item)="{ item }">
                <div class="product">
                  <img
                    style="width: 48px; height: 48px"
                    :src="item.imageUrl"
                    alt=""
                  />
                  <div class="d-flex">
                    <div class="d-flex align-items-center">
                      <span>{{ item.name }}</span>
                      <span
                        class="font-weight-bold col flex-nowrap"
                        style="min-width: max-content"
                        >x {{ item.quantity }}</span
                      >
                    </div>
                    <div v-if="item.note">
                      <b-icon icon="pencil" class="mr-2"></b-icon
                      ><span class="note-style">{{ item.note }}</span>
                    </div>
                  </div>
                </div>
              </template>
              <template #cell(subtotal)="{ item }">
                <div>{{ formatValue(item.quantity * item.price) }}</div>
              </template>
            </Table>
            <div class="checkout-wrapper__action d-none d-md-block">
              <div>
                <div class="d-flex justify-content-between">
                  SubTotal:
                  <span class="font-weight-bold ml-2">{{
                    formatValue(totalPrice)
                  }}</span>
                </div>
                <div class="d-flex justify-content-between">
                  Shipping:
                  <span class="font-weight-bold ml-2">{{
                    formatValue(shippingFee)
                  }}</span>
                </div>
                <div class="d-flex justify-content-between">
                  Total:
                  <span class="font-weight-bold ml-2">{{
                    formatValue(totalPrice + shippingFee)
                  }}</span>
                </div>
              </div>
            </div>
          </b-col>
          <b-col
            class="d-md-block"
            :class="!isInBilling && isMobile && 'd-none'"
            cols="12"
            md="7"
          >
            <div class="checkout-wrapper__title-main">
              <b></b><span>Billing Information</span><b></b>
            </div>
            <div class="form">
              <b-form @submit.prevent="onSubmit" ref="form">
                <b-form-group
                  label="Contact information"
                  label-class="font-weight-bold"
                  label-size="lg"
                >
                  <b-container class="p-0">
                    <b-row class="">
                      <b-col>
                        <b-form-group
                          id="fieldset-1"
                          label="Enter your name *"
                          label-for="input-1"
                          :invalid-feedback="'Invalid Name'"
                          :state="nameState"
                        >
                          <b-form-input
                            id="input-1"
                            v-model="billInfo.name"
                            :state="nameState"
                            trim
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <b-row class="">
                      <b-col>
                        <b-form-group
                          id="fieldset-2"
                          label="Enter your address *"
                          label-for="input-4"
                        >
                          <b-form-input
                            id="input-4"
                            v-model="billInfo.address"
                            trim
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col cols="12" md="7">
                        <b-form-group
                          label="Enter your email"
                          label-for="input-2"
                        >
                          <b-form-input
                            id="input-2"
                            v-model="billInfo.email"
                            trim
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <!-- :state="emailState" -->
                      <b-col cols="12" md="5">
                        <b-form-group
                          label="Your phone *"
                          label-for="input-3"
                          :invalid-feedback="'Invalid Phone'"
                          :state="phoneState"
                        >
                          <b-form-input
                            id="input-3"
                            v-model="billInfo.phone"
                            :state="phoneState"
                            trim
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <!-- :state="phoneState" -->
                    </b-row>
                  </b-container>
                </b-form-group>
                <b-form-group
                  label="Shipping methods"
                  label-class="font-weight-bold"
                  label-size="lg"
                >
                  <b-form-radio
                    v-model="billInfo.shippingMethod"
                    name="shipping-methods-radios"
                    value="pickup"
                    >Pickup at store</b-form-radio
                  >
                  <b-form-radio
                    v-model="billInfo.shippingMethod"
                    name="shipping-methods-radios"
                    value="delivery"
                    >Delivery</b-form-radio
                  >
                </b-form-group>
                <b-form-group
                  label="Payment Method"
                  label-class="font-weight-bold"
                  label-size="lg"
                >
                  <b-form-radio
                    v-model="billInfo.paymentMethod"
                    name="pament-methods-radios"
                    value="later"
                    >Payment later</b-form-radio
                  >
                </b-form-group>
                <b-button
                  class="d-none d-md-inline"
                  type="submit"
                  variant="secondary"
                  >Place Order</b-button
                >
              </b-form>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div class="bottom-area fixed-bottom d-flex flex-column d-md-none">
        <div class="p-2">
          <template v-if="isInBilling">
            <div class="d-flex justify-content-between">
              SubTotal:
              <span class="font-weight-bold ml-2">{{
                formatValue(totalPrice)
              }}</span>
            </div>
            <div class="d-flex justify-content-between">
              Shipping:
              <span class="font-weight-bold ml-2">{{
                formatValue(shippingFee)
              }}</span>
            </div>
          </template>
          <div class="d-flex justify-content-between">
            Total:
            <span class="font-weight-bold ml-2">{{
              formatValue(totalPrice + shippingFee)
            }}</span>
          </div>
        </div>
        <div class="d-flex">
          <router-link :to="PATH.CART" class="flex-grow-1">
            <b-button
              variant="outline-secondary"
              class="btn btn-lg w-100 rounded-0"
              ><b-icon icon="arrow-left" style="margin-right: 8px"></b-icon
              >Cart</b-button
            >
          </router-link>
          <b-button
            @click="checkout"
            class="btn btn-lg text-capitalize flex-grow-1 rounded-0"
            >{{ isInBilling ? "place order" : "checkout" }}</b-button
          >
        </div>
      </div>
    </template>
    <template v-else>
      <div class="checkout-wrapper__title-main">
        <b></b><span>Order Summary</span><b></b>
      </div>
      Your cart is empty
      <router-link :to="PATH.PRODUCTS">
        <b-button variant="outline-dark" class="btn mr-4"
          >Continue Shopping<b-icon
            icon="arrow-right"
            style="margin-left: 8px"
          ></b-icon
        ></b-button>
      </router-link>
    </template>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
