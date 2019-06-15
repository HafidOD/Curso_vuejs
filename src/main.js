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
  let a = value.split(' ');
  let a2 = [];
  
  for (let index = 0; index < a.length; index++) {
    if(a[index].toString().includes('#')) {
      let aux = `<a class="text-is-hashtag" href="https://www.instagram.com/explore/tags/${a[index]}/" target="_blank">${a[index]}</a>`;
      a2.push(aux);
    } else {
      a2.push(a[index]);
    }

  }
  let finalText =`<p>${a2.join(' ')}</p>`;

  return finalText;
});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
 