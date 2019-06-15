<template>
    <nav :class="{'main-navbar': true, 'on-scroll': scrollPosition > 0}">
        <LogoApp :onscroll="scrollPosition"/>
        <search-app></search-app>
        <notification></notification>     
    </nav>
</template>

<script>
import LogoApp from './LogoApp';
import Notification from './Notification';
import SearchApp from './SearchApp';

export default {
    name:'Navbar',
    components: {
        LogoApp,
        Notification,
        SearchApp
    },
    data() {
        return {
            scrollPosition: 0
        }
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },
    destroy() {
        window.removeEventListener('scroll', this.updateScroll)
    }
}
</script>
