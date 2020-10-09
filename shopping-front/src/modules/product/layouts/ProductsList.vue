<template>
  <div class="prod-list">
    <ProductCard
      v-for="p in products"
      :key="p.id"
      :product="p"
      :addToCart="addProduct"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ProductCard from "../../../components/ProductCard";
export default {
  name: "ProductsList",
  components: { ProductCard },
  props: {
    products: Array,
  },
  methods: {
    ...mapActions({
      addProduct: "cart/actAddToCart",
    }),
  },
};
</script>

<style>
</style>