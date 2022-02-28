<template>
  <div id="app">
    <router-view />
    <FooterView />
  </div>
</template>

<script>
import FooterView from '@/components/FooterView.vue'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    FooterView,
  },
}
</script>
