<template>
  <div class="cart-wrapper">
    <div class="cart-wrapper__title-main"><b></b><span>CART</span><b></b></div>
    <template v-if="products.length">
      <Table :items="products" :fields="fields">
        <template #cell(item)="{ item }">
          <div class="product">
            <img style="width: 100px" :src="item.imageUrl" alt="" />
            <div class="product__detail">
              <div class="d-flex justify-content-between">
                <div>
                  <div class="product__detail--name">{{ item.name }}</div>
                  <TextInput
                    :value="item.note"
                    showRemainCharacter
                    placeholder="Enter message on cake"
                    @onChange="(val) => handleChangeNote(item.id, val)"
                  />
                </div>
                <b-icon-trash
                  class="d-sm-none"
                  role="button"
                  @click="handleDeleteProduct(item.id)"
                ></b-icon-trash>
              </div>
              <div class="product__detail--mobile">
                <div>{{ formatValue(item.price) }}</div>
                <div>
                  <NumberInput
                    :value="item.quantity"
                    :max="item.inventory"
                    @onChange="(val) => handleChangeQuantity(item.id, val)"
                  />
                </div>
              </div>
            </div>
          </div>
        </template>
        <template #cell(quantity)="{ item }">
          <div>
            <NumberInput
              :value="item.quantity"
              showRemainCharacter
              :max="item.inventory"
              @onChange="(val) => handleChangeQuantity(item.id, val)"
            />
          </div>
        </template>
        <template #cell(price)="{ item }">
          <div>{{ formatValue(item.price) }}</div>
        </template>
        <template #cell(subtotal)="{ item }">
          <div>{{ formatValue(item.quantity * item.price) }}</div>
        </template>
        <template #cell(action)="{ item }">
          <div>
            <b-icon-trash
              role="button"
              @click="handleDeleteProduct(item.id)"
            ></b-icon-trash>
          </div>
        </template>
      </Table>

      <div class="cart-wrapper__action">
        <router-link :to="PATH.PRODUCTS">
          <b-button variant="outline-secondary" class="btn btn-lg w-100"
            ><b-icon icon="arrow-left" style="margin-right: 8px"></b-icon
            >Shopping</b-button
          >
        </router-link>
        <router-link :to="PATH.CHECKOUT">
          <b-button class="btn text-capitalize btn btn-lg w-100"
            >Confirmation</b-button
          >
        </router-link>
      </div>
    </template>
    <div v-else>
      Your cart is empty
      <router-link :to="PATH.PRODUCTS">
        <b-button variant="outline-dark" class="btn mr-4"
          ><b-icon icon="arrow-left" style="margin-right: 8px"></b-icon>Continue
          Shopping</b-button
        >
      </router-link>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
