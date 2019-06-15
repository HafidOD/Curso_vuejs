import Vue from 'vue'
import App from './App.vue'
import router from './router'
require('./scss/master.scss');

Vue.config.productionTip = false

Vue.filter('shortText', function (value) {
  return value.substring(0,62);
});

Vue.filter('readMore', function (text, length, suffix) {
  return text.substring(0, length) + suffix;
});

Vue.filter('viewHashtag', function (value) {
  console.log(value.split(' '));

  return value.toUpperCase();
});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
 