<template>
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">image_Url</th>
      <th scope="col">price</th>
       <th scope="col">Stock</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in productsRefresh" :key="product.id">
      <th scope="row">{{product.id}}</th>
      <td>{{product.name}}</td>
      <td>{{product.image_url}}</td>
      <td>{{product.price}}</td>
      <td>{{product.stock}}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  name: 'stacktable',
  computed: {
    productsRefresh () {
      return this.$store.state.products.data
    }
  },
  created () {
    this.$store.dispatch('fetchProduct')
  }
}
</script>

<style>

</style>
