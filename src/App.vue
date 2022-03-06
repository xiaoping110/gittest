<template>
  <div id="app">
    <router-link to="/foo">Foo</router-link>
    <router-link to="/bar">BAR</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Bar from './componets/Bar.vue'
import Foo from './componets/Foo.vue'
export default {
  components: {
    Foo,
    Bar
  }
}
</script>