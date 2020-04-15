<template>
<form>
<div class="form-group">
<label for="nama">Name</label>
<input type="text" id="nama" class="form-control" placeholder="Product Name" v-model="deploy.name">
</div>
<div class="form-group">
<label for="image">image_url</label>
<input type="text" id="image" class="form-control" placeholder="image url" v-model="deploy.image_url">
</div>
<div class="form-group">
<label for="price">price</label>
<input type="number" id="price" class="form-control" placeholder="price" v-model="deploy.price">
</div>
<div class="form-group">
<label for="stock">stock</label>
<input type="number" id="stock" class="form-control" placeholder="stock" v-model="deploy.stock">
</div>
<!-- <div class="form-group">
<label for="category">category</label>
<select id="category" class="form-control">
<option value="">- choose category</option>
<option value="">Makanan</option>
<option value="">Minuman</option>
<option value="">Peralatan</option>
</select>
</div> -->
<b-button type="submit" variant="primary" @click.prevent="insertData">Submit</b-button>
 <b-button type="reset" variant="danger" @click.prevent="">Reset</b-button>
</form>
</template>

<script>
import axios from '@/axios'
export default {
  name: 'formAddItem',
  data () {
    return {
      deploy: {
        name: '',
        image_url: '',
        price: 0,
        stock: 0
      }

    }
  },
  methods: {
    insertData (deploy) {
      axios({
        method: 'POST',
        url: '/product',
        data: this.deploy,
        headers: {
          token: localStorage.token
        }
      })
        .then(result => {
          this.$toasted.global.my_app_success({
            message: 'Succes Add Item '
          })
          this.$router.push('/home/stock/tabelstock')
        })
        .catch(err => {
          this.$toasted.global.my_app_error({
            message: err
          })
          console.log(err)
        })
    },
    cancelbutton () {
      this.$router.push('/home/stock/tabelstock')
    }
  }
}
</script>

<style>

</style>
