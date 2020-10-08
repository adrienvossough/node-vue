<template>
  <div id="products">
    <h1>Products</h1>
    <ProductsList :products="products" />
  </div>
</template>

<script>
import ProductsList from "./layouts/ProductsList.vue";
// import ProductService from "./services/products.service";
export default {
  name: "Products",
  components: { ProductsList },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    // ProductService.getProducts().then((prods) => (this.products = prods));
  },
};
</script>

<style>
</style>