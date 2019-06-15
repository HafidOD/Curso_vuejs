<template>
    <HelloWorld :msg="message"/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return{
      message: "Hola #buendia a todos #goodmorning #helloworld"
    }
  }
}
</script>
