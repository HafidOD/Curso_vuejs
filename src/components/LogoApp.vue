<template>
   <h1 class="main-logo">
       <i class="fab fa-instagram"></i> 
       <span :class="{'is-hidden': onscroll >= 50}"> Instagram</span> 
   </h1>
</template>

<script>
export default {
    name: 'LogoApp',
    props: {
        onscroll: Number
    }
}
</script>

