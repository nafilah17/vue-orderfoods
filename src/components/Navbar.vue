<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <div class="container">
        <b-navbar-brand href="/">Makan Kuy!</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/foods">Foods</router-link>
            </li>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/carts">
                Cart
                <b-icon-cart></b-icon-cart>
                <span class="badge badge-success" ml="2">
                  {{ updateCart ? updateCart.length : total_orders.length }}
                </span>
              </router-link>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
  data() {
    return {
      total_orders: [],
    }
  },
  props: ['updateCart'],
  methods: {
    setTotal(data) {
      this.total_orders = data
    },
  },
  mounted() {
    axios
      .get('http://localhost:3000/carts')
      .then((response) => this.setTotal(response.data))
      .catch((error) => console.log(error, 'Error'))
  },
}
</script>

<style></style>
