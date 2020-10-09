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
import { EventBus } from "@/components/event-bus";
export default {
  name: "ProductCard",
  props: {
    product: Object,
    addToCart: Function,
  },
  methods: {
    eventEmit: () => {
      EventBus.$emit("le-nom-de-mon-event", "ma valeur");
    },
  },
  computed: {
    add: () => {
      this.addToCart(this.product._id);
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