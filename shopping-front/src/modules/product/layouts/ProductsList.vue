<template>
  <div class="prod-list">
    <ProductCard
      v-for="p in products"
      :key="p.id"
      :product="p"
      :addToCart="actAddProduct"
    />
  </div>
</template>

<script>
// import { mapActions } from "vuex";
// import Component from "vue-class-Component";
import ProductCard from "../../../components/ProductCard";
export default {
  name: "ProductsList",
  components: { ProductCard },
  props: {
    products: Array,
  },
  methods: {
    // ...mapActions("cart", ["actAddProduct"]),
  },
};
</script>

<style>
</style>