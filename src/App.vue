<template>
<section>
  <navbar></navbar>
  <div class="container">
    <router-view/>
  </div>
</section>
</template>
<script>

import Navbar from './components/Navbar';

export default {
  name: "App",
  components: {
    Navbar
  }
}
</script>
