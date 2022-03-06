<template>
  <div>
    Foo--{{this.$store.state.name}}
  </div>
</template>

<script>
export default {
  asyncDate (store) {
    return store.dispatch('changeName', 'zf');
  }
}
</script>

<style>
</style>