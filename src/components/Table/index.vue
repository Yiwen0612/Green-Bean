<template>
  <div class="table-container">
    <b-table :items="items" :fields="fields" :thead-class="theadClass">
      <!-- <template v-for="(_, slot) in $slots">
        <template :slot="slot">
          <slot :name="slot"></slot>
        </template>
      </template> -->
      <template v-for="(index, name) in $scopedSlots" v-slot:[name]="data">
        <slot :name="name" v-bind="data"></slot>
      </template>
    </b-table>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss"></style>
