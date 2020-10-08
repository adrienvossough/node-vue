<template>
  <div class="card">
    <md-card>
      <md-card-header>
        <div class="md-title">{{ product.name }}</div>
      </md-card-header>

      <md-card-content> Description : {{ product.desc }} </md-card-content>
      <md-card-content> Prix : {{ product.price }} </md-card-content>
      <md-card-actions>
        <md-button @click="addToCart(product)">Ajouter au panier</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object,
    addToCart: Function,
  },
  computed: {
    add: (product) => {
      this.addToCart(product);
    },
  },
};
</script>

<style>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>