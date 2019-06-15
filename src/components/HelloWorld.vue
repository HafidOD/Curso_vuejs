<template>
  <div class="hello">
    <h1>{{ msg | viewHashtag }}</h1>
    <gallery></gallery>
  </div>
</template>

<script>
import Gallery from './Gallery.vue'


export default {
  name: 'HelloWorld',
  components: {
    Gallery
  },
  props: {
    msg: String
  }
}
</script>