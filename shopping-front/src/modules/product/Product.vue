<template>
  <div id="products">
    <h1>Products</h1>
    <ProductsList :products="products" />
  </div>
</template>

<script>
import ProductsList from "./layouts/ProductsList.vue";
import ProductService from "./services/product.service";
export default {
  name: "Products",
  components: { ProductsList },
  data() {
    return {
      products: [],
      prodSub: null,
    };
  },
  mounted() {
    this.prodSub = ProductService.productsObs.subscribe(
      (products) => (this.products = products)
    );
    ProductService.getProducts();
  },
  destroyed() {
    this.prodSub.unsubscribe();
  },
};
</script>

<style>
</style>