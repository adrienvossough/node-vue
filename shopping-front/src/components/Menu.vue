<template></template>

<script>
import { EventBus } from "@/components/event-bus";
export default {
  name: "Menu",
  mounted() {
    EventBus.$on("le-nom-de-mon-event", (valeur) => {});
  },
  destroyed() {
    EventBus.$off("le-nom-de-mon-event");
  },
};
</script>

<style>
</style>