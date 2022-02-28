<template>
  <div class="food-detail">
    <Navbar />
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <!-- breadcrumb -->
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="text-dark">Foods</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Food Order
              </li>
            </ol>
          </nav>

          <!-- detail -->
          <div class="row mt-2">
            <div class="col-md-6">
              <img
                :src="'../assets/images/' + product.image"
                class="img-fluid shadow"
                width="700px"
              />
            </div>
            <div class="col-md-6">
              <h2>
                <strong>{{ product.name }}</strong>
              </h2>
              <hr />
              <h4>
                Harga :
                <strong>Rp. {{ product.price }}</strong>
              </h4>
              <!-- untuk menghilangkan reload halaman-->
              <form class="mt-4" v-on:submit.prevent>
                <div class="form-group">
                  <label for="total_order">Jumlah Pesanan</label>
                  <input
                    required
                    type="number"
                    class="form-control"
                    v-model="order.total_order"
                  />
                </div>
                <div class="form-group">
                  <label for="description">Keterangan</label>
                  <textarea
                    required
                    v-model="order.description"
                    type="number"
                    class="form-control"
                    placeholder="Pedas, Nasi setengah"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="btn btn-warning"
                  @click="orderProduct"
                >
                  Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'

export default {
  name: 'FoodDetailView',
  components: {
    Navbar,
  },
  data() {
    return {
      product: {},
      order: {},
    }
  },
  methods: {
    setProduct(data) {
      this.product = data
    },
    orderProduct() {
      if (this.order.total_order) {
        this.order.products = this.product
        axios
          .post('http://localhost:3000/carts', this.order)
          .then(() => {
            this.$router.push({ path: '/carts' })
            console.log('berhasil')
          })
          .catch((err) => console.log('error', err))
      } else {
        postMessage('Data harus di isi')
        console.log('Data gagal')
      }
    },
  },
  mounted() {
    axios
      .get('http://localhost:3000/products/' + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error, 'Error'))
  },
}
</script>

<style></style>
