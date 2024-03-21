<template>
  <div>
    <h4>{{ name }}</h4>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'CommonMain',
  data() {
    return {
    }
  },
  computed: {
    name() {
      return this.$store.state.user.name
    }
  }
}
</script>

<style>

</style>