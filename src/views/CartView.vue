<template>
  <div class="cart">
    <Navbar :updateCart="carts" />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="text-dark">Foods</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Cart
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2>
            My
            <strong>Cart</strong>
          </h2>
          <div class="table-responsive mt-4">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Food</th>
                  <th scope="col">Description</th>
                  <th scope="col">Total Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(cart, index) in carts" :key="cart.id">
                  <!-- karena index dimulai dari 0 maka index + 1 -->
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="'../assets/images/' + cart.products.image"
                      class="img-fluid"
                      width="250"
                    />
                  </td>
                  <td>{{ cart.products.name }}</td>
                  <td>{{ cart.description ? cart.description : '-' }}</td>
                  <td align="center">{{ cart.total_order }}</td>
                  <td align="left">Rp. {{ cart.products.price }}</td>
                  <td align="left">
                    <strong>
                      Rp. {{ cart.products.price * cart.total_order }}
                    </strong>
                  </td>
                  <td align="center" class="text-danger">
                    <b-icon-trash @click="deleteItem(cart.id)"></b-icon-trash>
                  </td>
                </tr>

                <tr>
                  <td colspan="6" align="right">
                    <strong>Grand Total</strong>
                  </td>
                  <td>
                    <strong>Rp. {{ grandTotal }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- form checkout -->
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="name">Nama :</label>
              <input
                required
                type="text"
                class="form-control"
                v-model="order.name"
              />
            </div>
            <div class="form-group">
              <label for="table_number">Nomor Meja :</label>
              <input
                required
                type="text"
                class="form-control"
                v-model="order.table_number"
              />
            </div>

            <button
              type="submit"
              class="btn btn-warning float-right"
              @click="checkout"
            >
              Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Cart',
  components: {
    Navbar,
  },
  data() {
    return {
      carts: [],
      order: {},
    }
  },
  methods: {
    setCarts(data) {
      this.carts = data
    },
    deleteItem(id) {
      axios
        .delete('http://localhost:3000/carts/' + id)
        .then(() => console.log('Deleted'))
        .catch((error) => console.log(error, 'Error'))

      // update data keranjang
      axios
        .get('http://localhost:3000/carts/')
        .then((response) => this.setCarts(response.data))
        .catch((error) => console.log(error, 'Error'))
    },
    checkout() {
      this.order.carts = this.carts
      axios
        .post('http://localhost:3000/orders', this.order)
        .then(() => {
          // hapus semua keranjang
          this.carts.map(function (item) {
            return axios
              .delete('http://localhost:3000/carts/' + item.id)
              .catch((error) => console.log(error, 'Error'))
          })
          this.$router.push({ path: '/order-success' })
          console.log('berhasil')
        })
        .catch((err) => console.log('error', err))
    },
  },
  mounted() {
    axios
      .get('http://localhost:3000/carts/')
      .then((response) => this.setCarts(response.data))
      .catch((error) => console.log(error, 'Error'))
  },
  computed: {
    grandTotal() {
      return this.carts.reduce(
        (items, data) => items + data.products.price * data.total_order,
        0,
      )
    },
  },
}
</script>

<style></style>
