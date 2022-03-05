<template>
  <div>
    <Foo></Foo>
    <Bar></Bar>
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