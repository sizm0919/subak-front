<template>
  <div id="app">
    <HeaderView/>
    <router-view/>
    <FooterView/>
  </div>
</template>

<script>
import HeaderView from './views/HeaderView.vue'
import FooterView from './views/FooterView.vue'

export default {
  name: 'App',
  components: {
    HeaderView,
    FooterView
  }
}
</script>

<style>

</style>
